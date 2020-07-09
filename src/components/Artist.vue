<template>
    <div class="artistMain">
        <div class="oneWorld">
            <div class="oneWorld__artistPhoto">
                <img src="../assets/img/test.jpg" class="oneWorld__artistPhoto__photo">
            </div>
            <p class="oneWorld__artistName">{{artistName}}</p>
            <p class="about">About</p>
            <div class="division"></div>
            <div class="artistDescription">
                <p class="artistDescription__Dsp">{{Descripcion}}</p>
            </div>
            <div class="division"></div>
            <p class="similar">Similar to {{artistName}}</p>
            <div class="similarArtistContain">
                <div class="similarArtist" v-for="photo in photos" :key="photo.id">
                    <img :src="photo.url" alt="" class="similarArtistPhoto">
                </div>
            </div>
        </div>
        <div class="twoWorld">
            <p class="twoWorld__albums">Albums</p>
            <div class="twoWorld__albumsContainer">
                <div class="twoWorld__albumsCard" v-for="photo in photos" :key="photo.id">
                    <img :src="photo.url" class="twoWorld__albumsCard__img">
                    <p class="twoWorld__albumsCard__name">{{photo.name}}</p>
                    <p class="twoWorld__albumsCard__date">{{photo.date}}</p>
                </div>
            </div>
            <p class="popularTracks">Most Popular Tracks</p>
            <div class="divisionTwo"></div>
            <div class="songsContainer">
                <div class="songsContainer__song" v-for="photo in photos" :key="photo.id">
                    <p class="songsContainer__song__id">{{photo.id}}</p>
                    <div class="songsContainer__song__details">
                        <img :src="photo.url" class="songsContainer__song__details__img">
                        <div>
                            <p class="songsContainer__song__details__songName">{{photo.songName}}</p>
                            <p class="songsContainer__song__details__albumName">{{photo.name}}</p>
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
            artistName: 'Nombre Prueba',
            Descripcion: 'Esta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el textoEsta es una descripcion de el texto',
            photos:[
                {id: 1, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Album', date: '1998' , songName: "Nombre Cancion"},
                {id: 2, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Album', date: '1998' , songName: "Nombre Cancion"},
                {id: 3, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Album', date: '1998' , songName: "Nombre Cancion"},
                {id: 4, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Album', date: '1998' , songName: "Nombre Cancion"}
            ]     
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
        }
    }
}
</style>