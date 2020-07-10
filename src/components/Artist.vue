<template>
    <div class="artistMain">
        <div class="oneWorld">
            <div class="oneWorld__artistPhoto">
                <img :src="this.artist.images[0].url" class="oneWorld__artistPhoto__photo">
            </div>
            <p class="oneWorld__artistName">{{this.artist.name}}</p>
            <p class="about">About</p>
            <div class="division"></div>
            <div class="artistDescription">
                <p class="artistDescription__Dsp">{{Descripcion}} <a :href="this.artist.external_urls.spotify">Spotify</a></p>
            </div>
            <div class="division"></div>
            <p class="similar">Similar to {{this.artist.name}}</p>
            <div class="similarArtistContain">
                <div class="similarArtist" v-for="related in related_artist" :key="related.id">
                    <img :src="related.images[0].url" alt="" class="similarArtistPhoto">
                </div>
            </div>
        </div>
        <div class="twoWorld">
            <p class="twoWorld__albums">Albums</p>
            <div class="twoWorld__albumsContainer">
                <div class="twoWorld__albumsCard" v-for="album in albums" :key="album.id">
                    <img :src="album.images[1]" class="twoWorld__albumsCard__img">
                    <p class="twoWorld__albumsCard__name">{{album.name}}</p>
                    <p class="twoWorld__albumsCard__date">{{album.release_date}}</p>
                </div>
            </div>
            <p class="popularTracks">Most Popular Tracks</p>
            <div class="divisionTwo"></div>
            <div class="songsContainer">
                <div class="songsContainer__song" v-for="popu in popularTracks" :key="popu.id">
                    <!--<p class="songsContainer__song__id">{{popu.id}}</p>-->
                    <div class="songsContainer__song__details">
                        <img :src="popu.album.images[0].url" class="songsContainer__song__details__img">
                        <div>
                            <p class="songsContainer__song__details__songName">{{popu.name}}</p>
                            <p class="songsContainer__song__details__albumName">{{popu.album.name}}</p>
                        </div>
                        <div class="songsContainer__song__details__durationContainer">
                            <p class="songsContainer__song__details__durationContainer__duration">{{popu.duration_ms}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data:function(){
        return{
            Descripcion: 'Spotify por medio de la API no envia la descripcion de los artistas, por lo contrario puedes dar Click para redirigirte a la pagina de spotify y disfrutar su descripcion.',
            idRecived: {},
            tokenRecived: {},
            token: {},
            artist: [],
            albums: [],
            related_artist: [],
            popularTracks: [],
            duration: {}
       }
    },
    methods:{
        getArtist(){
            if (this.idRecived != '') {
                this.$http.get('https://api.spotify.com/v1/artists/' + this.idRecived,
                {params:{ id: this.idRecived},
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+ this.token
                    }
                    })
                .then(response =>{this.artist = response.data})
            }
        },
        getArtistAlbums(){
            this.$http.get('https://api.spotify.com/v1/artists/' + this.idRecived + '/albums',
                {params: { id: this.idRecived, market: 'EE', include_groups: 'single', limit: 5},
                    headers:{
                       'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+ this.token 
                    }}).then(response=>{this.albums = response.data.items})
        },
         getRelatedArtist(){
            this.$http.get('https://api.spotify.com/v1/artists/' + this.idRecived + '/related-artists',
                { params: {id : this.idRecived},
                    headers:{
                       'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+ this.token 
                    }}).then(response=>{this.related_artist = response.data.artists})
        },
        getPopularTracksOfArtist(){
            this.$http.get('https://api.spotify.com/v1/artists/' + this.idRecived + '/top-tracks',
                { params: {id : this.idRecived, country: 'EE'},
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+ this.token 
                    }}).then(response=>{this.popularTracks = response.data.tracks})
        },
        getDuration(){
            alert('Tengo duracion')
        }
    },
    mounted(){
        this.tokenRecived = this.$route.params.tok.access_token
        this.idRecived = this.$route.params.id
        this.token = this.$route.params.tok.access_token
        if (this.token != '') {
            this.getArtist()
        }
        this.getArtistAlbums()
        this.getRelatedArtist()
        this.getPopularTracksOfArtist()
        if (this.popularTracks != '') {
            this.getDuration()
        }
    }
}
</script>
<style lang="scss">
.artistMain{
    display: flex;
    justify-content: space-between;
}
.oneWorld{
    width: 47%;

    &__artistPhoto{
        width: 30%;
        width: 145px;
        margin-left: 33%;
        margin-top: 5%;
        height: 145px;

        &__photo{
            border-radius: 50%;
            width: 145px;
            height: 145px;
        }
    }

    &__artistName{
        color:#ffffff;
        font-size: 25px;
        width: 30%;
        margin-left: 31%;
    }
}

.artistDescription{
    width: 60%;
    margin-left: 16%;
    margin-top: 10px;
    margin-bottom: 17px;
    height: 190px;
    text-align: justify;
    overflow-y: scroll;

    &__Dsp{
        color: #d1d1d4;
        margin: 0;
        padding: 0;
        width: 97%;
    }
}

.artistDescription::-webkit-scrollbar{
    width: 7px;
}

.artistDescription::-webkit-scrollbar-thumb{
    background: #d2d0d0;
    border-radius: 5px;
}
.artistDescription::-webkit-scrollbar-track{
    background: #212224;
    border-radius: 5px;
}



.about{
    color: #d1d1d4;
    font-size: 20px;
    width: 8%;
    margin-left: 16%;
    height: 20px;
}

.division{
    width: 60%;
    height: 2px;
    background: #212224;
    margin-left: 16%;
}

.similar{
    color: #d1d1d4;
    font-size: 20px;
    width: 60%;
    margin-left: 16%;
    height: 20px;
}

.similarArtistContain{
    display: flex;
    width: 77%;
    margin-left: 16%;
    flex-wrap: wrap;
}

.similarArtist{
    width: 90px;
    margin-top: 2%;
    height: 90px;
    margin-right: 3%;
}

.similarArtistPhoto{
    height: 127px;
    border-radius: 50%;
    width: 90px;
    height: 90px;
}

.twoWorld{
    width: 53%;

    &__albums{
        color: #d1d1d4;
        font-size: 20px;
        width: 10%;
        margin-top: 4%;
        height: 20px;
    }

    &__albumsContainer{
        width: 100%;
        height: 27%;
        display: flex;
        border-bottom: 2px solid #212224;
        overflow: auto;

        &__img{
            width: 30%;
            height: 100%;
        }
    }

    &__albumsCard{
        width: 17%;
        margin-right: 20px;

        &__img{
            width: 100%;
            height: 113px;
            border-radius: 4%;
        }

        &__name{
            margin: 0;
            margin-top: 10px;
            padding: 0;
            color: #ffffff;
        }

        &__date{
            margin: 0;
            margin-top: 10px;
            padding: 0;
            color: #d1d1d4;
        }
    }
}

.divisionTwo{
    width: 35%;
    margin-left: 20px;
    height: 2px;
    background: #212224;
}

.popularTracks{
    margin: 0;
    margin-top: 26px;
    width:20%;
    margin-bottom: 20px;
    position: relative;
    left: 20px;
    color: #ffffff;
}

.songsContainer{
    &__song{
        margin-left: 20px;
        border-bottom: 2px solid #212224;
        display: flex;

        &__id{
            font-size: 20px;
            color:#d1d1d4;
        }

        &__details{
            margin-left: 10px;
            margin-top: 10px;
            margin-bottom: 10px;
            display: flex;

            &__img{
                width: 70px;
                height: 70px;
                border-radius: 5%;
            }

            &__songName{
                margin: 0;
                color: #ffffff;
                font-size: 16px;
                margin-top: 5px;
                margin-left: 11px;
            }

            &__albumName{
                margin: 0;
                color: #d1d1d4;
                margin-top: 4px;
                margin-left: 11px;
                font-size: 11px;
            }

            &__durationContainer{
                position: absolute;
                left: 90%;

                    
                &__duration{
                    margin: 0;
                    color: #d1d1d4;
                    font-size: 17px;
                }
            }

        }
    }
}
</style>