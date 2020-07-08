<template>
    <div class="main">
        <p class="main__tittle">New Releases</p>
        <div style="    display: flex;
    width: 90%;
    flex-direction: row;
    justify-content: flex-end;">
            <div style="position: relative;
    right: 70px;">
                <img src="../assets/img/arrow.png" alt="" style="transform: rotate(180deg);width: 35px;
    height: 35px;">
            </div>
            <div>
                <img src="../assets/img/arrow.png" alt="" style="width: 35px;
    height: 35px;">
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
    }
</style>