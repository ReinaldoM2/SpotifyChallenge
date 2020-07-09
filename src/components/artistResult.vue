<template>
    <div>
        <p class="tittle">Artistas Encontrados</p>
        <div class="pagination">
            <div class="left_content">
                <img src="../assets/img/arrow.png" class="left_arroW">
            </div>
            <div class="right_content">
                <img src="../assets/img/arrow.png" class="right_arroW">
            </div>
        </div>
        <div class="artistContainer">
            <div class="artistCard" v-for="photo in photos" :key="photo.id" @click="artist(photo.id)">
                <img :src="photo.url" class="artistPhoto">
                <p class="artistName">{{ photo.name }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data:function(){
        return{
             photos:[
                {id: 1, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 2, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 3, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 4, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 5, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 6, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 7, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 8, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 9, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 10, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 11, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'},
                {id: 12, url: 'https://codigoesports.com/wp-content/uploads/2020/05/VALORANT_Jett.jpg', name: 'Nombre Artista'}
            ]     
        }
    },
    methods:{
        artist(id){
            alert('Soy el id #' + id),
            this.$router.push({name: 'Artist', params: {id: id}})
        }
    }
}
</script>
<style lang="scss">
.tittle{
    text-align: center;
    color: #d4d4d4;
    font-size: 25px;
}

.pagination{
    width: 10%;
    display: flex;
    position: relative;
    left: 81%;
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

.artistContainer{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin-left: 14%;
    margin-top: 2%;
}

.artistCard{
    margin-right: 20px;
    margin-bottom: 25px;
    cursor: pointer;
}

.artistPhoto{
    width: 180px;
    height: 180px;
}

.artistName{
    margin: 0;
    color: #d4d4d4;
    margin-top: 9px;
    margin-bottom: 25px;
}
</style>