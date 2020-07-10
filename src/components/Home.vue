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
    data(){
        return{
            token: ''
        }
    },
    mounted(){
         this.token = localStorage.getItem('token')
        if(!this.token){
            localStorage.setItem('token', this.$route.query.access_token)
        }
    }
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