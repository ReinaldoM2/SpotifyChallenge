<template>
    <div class="cardMain">
        <div class="card" v-for="dato in datos" :key="dato.id" @click="$router.push({name: 'Artist'})">
            <div class="card__image">
                <img :src="dato.album.images[0].url" class="card__image__img">
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
            token: {},
            datos: []
        }
    },
    methods:{
         getTracks(){
            this.$http.get('https://api.spotify.com/v1/tracks',
            {params:{
                ids: '3f7gYMirBEKuc57218BjOY,4VrWlk8IQxevMvERoX08iC,27SdWb2rFzO6GWiYDBTD9j,1j4kHkkpqZRBwE0A4CN4Yv,1NpW5kyvO4XrNJ3rnfcNy3,0TDLuuLlV54CkRRUOahJb4,4E3afPSY5fUEelQS9ppL0e,1SgdUjvppHnIp6L7DZSnwc',
                market: 'EE',},
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ this.token.access_token
                }
                })
            .then(response =>{this.datos = response.data.tracks})
        }
    },
        mounted(){
            this.token = this.$route.query
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