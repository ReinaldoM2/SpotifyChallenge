<template>
    <div class="main">
        <p class="main__tittle">New Releases</p>
        <div class="main__content">
            <div class="left_content">
                <img src="../assets/img/arrow.png" class="left_arroW">
            </div>
            <div class="right_content">
                <img src="../assets/img/arrow.png" class="right_arroW">
            </div>
        </div>
        <Cards></Cards>
    </div>
</template>
<script>

import Cards from './Cards.vue'
export default {
    components:{
        Cards
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
            .then(response =>{this.datos = response.data})
        }
    },
}
</script>
<style lang="scss">
    .main{
        &__tittle{
            font-size: 30px;
            color: white;
            width: 14%;
            text-align: center;
            position: relative;
            left: 46%;
        }
        &__content{
            display: flex;
            width: 90%;
            flex-direction: row;
            justify-content: flex-end;
        }
    }

    .left_content{
        border: 1px solid white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        text-align: center;
        margin-right: 20px;
    }

    .right_content{
        border: 1px solid white;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        text-align: center;
    }

    
    .left_arroW{
        width: 20px;
        height: 20px;
        position: relative;
        right: 1px;
        top: 4px;
    }

    .right_arroW{
        width: 20px;
        height: 20px;
        position: relative;
        right: 1px;
        top: 4px;
        transform: rotate(180deg);
    }
</style>