<template>
    <div>
        <p class="tittle">Canciones Encontradas</p>
        <div class="pagination">
             <div class="left_content">
                <img src="../assets/img/arrow.png" class="left_arroW">
            </div>
            <div class="right_content">
                <img src="../assets/img/arrow.png" class="right_arroW">
            </div>
        </div>
        <div class="songContainer">
            <div class="songCard" v-for="photo in photos" :key="photo.id" @click="artist(photo.id)">
                <div class="songDetail">
                    <img :src="photo.url" class="songPhoto">
                    <p class="songName">{{ photo.songName }}</p>
                    <p class="artistName">{{ photo.name }}</p>
                </div>
                <div class="songReproducer">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        data:function(){
        return{
             photos:[
                {id: 1, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 2, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 3, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 4, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 5, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 6, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 7, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
                {id: 8, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista', songName: 'Nombre Cancion'},
            ]     
        }
    },
}
</script>
<style lang="scss">

.tittle{
    text-align: center;
    color: #d4d4d4;
    font-size: 25px;
}

.songDetail{
    background-color: #0a0a0a87;
    height: 250px;
}

.artistName{
    margin: 0;
    color: #d4d4d4;
    margin-top: 9px;
    text-align: center;
    font-size: 14px;
}

.songName{
    margin: 0;
    color: #5c5c5c;
    margin-top: 9px;
    text-align: center;
    font-size: 15px;
}

.songReproducer{
    width: 100%;
    height: 50px;
    background: black;
    margin-bottom: 50px;
    cursor: pointer;
}

.songPhoto{
    width: 270px;
    height: 186px;
}

.songContainer{
    display: flex;
    flex-wrap: wrap;
    width: 77%;
    margin-left: 14%;
    margin-top: 2%;
}

.songCard{
    margin-right: 20px;
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