<template>
    <div class="cardMain">
        <div class="card" v-for="dato in datos" :key="dato.id" @click="postSongID(dato.artists[0].id)">
            <div class="card__image">
                <img :src="dato.images[0].url" class="card__image__img">
            </div>
            <div class="card__songName">
                <p>{{dato.name}}</p>
            </div>
            <div class="card__singer">
                <p>{{dato.artists[0].name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            token: '',
            datos: []
        }
    },
    methods:{
         getTracks(){
            this.$http.get('https://api.spotify.com/v1/browse/new-releases',
            {params:{
                country: 'EE',},
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ this.token
                }
                })
            .then(response =>{this.datos = response.data.albums.items})
        },

        postSongID(id){
            this.$router.push({name: 'Artist', params: {id: id, tok:this.token}})
        }
    },
        mounted(){
            this.token = this.$route.query.access_token
            this.getTracks()
        }
    }
</script>
<style lang="scss">
.cardMain{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}
    .card{
        margin: 10px;
        width: 15%;
        cursor: pointer;
        &__image{
            width: 100%;
            height: 230px;
            &__img{
               height: 230px;
               width: 100%;
               border-radius: 5px;
            }
        }

        &__songName{
            color: #989899;
            font-size: 20px;
        }

        &__singer{
            color: #434347;
            font-size: 16px;
            position: relative;
            bottom: 15px;
        }
    }
</style>