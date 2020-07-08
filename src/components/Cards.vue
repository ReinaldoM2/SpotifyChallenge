<template>
    <div class="cardMain">
        <div class="card" v-for="dato in datos" :key="dato.id">
            <div class="card__image">
                <img :src="dato.img" class="card__image__img">
            </div>
            <div class="card__songName">
                <p>{{dato.songName}}</p>
            </div>
            <div class="card__singer">
                <p>{{dato.singer}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            datos:[
                {id: 1, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'},
                {id: 2, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'},
                {id: 3, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'},
                {id: 4, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'},
                {id: 5, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'},
                {id: 6, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'},
                {id: 7, img: 'https://stopga.me/images/articles/2020/06/12/valorant_kak_igrat_za_sayfera-1591941375-s.jpg', songName: 'Nombre de la Cancion', singer: 'Cantante'}
            ]
        }
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