<template>
    <div class="container">
        <div class="container__image">
            <img src="../assets/img/logo.png" class="container__image__img">
        </div>
        <div class="container__main">
            <img src="../assets/img/lupa.png" class="container__main__img">
            <input type="text" placeholder="Buscar Artista" class="container__main__search">
        </div>
         <div class="container__main">
            <img src="../assets/img/lupa.png" class="container__main__img">
            <input type="text" placeholder="Buscar Artista" class="container__main__search">
        </div>  
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .container {
        display: flex;
        background-color: #262628;
        height: 80px;

        &__image {
            width: 15%;
            &__img{
                width: 180px;
                position: relative;
                left: 30px;
                top: 12px;
            }
        }

        &__main{
            display: flex;
            align-items: center;
            position: relative;
            width: 30%;
            margin-left: 4%;
            &__img{
                position: absolute;
                width: 20px;
                height: 20px;
                left: 13px;
            }
            &__search{
                height: 45%;
                width: 98%;
                padding-left: 45px;
                background-color: #323235;
                border-radius: 5px;
                border: unset;
                font-family: sans-serif;
                font-size: 17px;
            }
        }
    }
</style>