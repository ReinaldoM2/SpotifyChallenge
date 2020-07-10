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
            <div class="songCard" v-for="sn in songS" :key="sn.id" @click="artist(sn.id)">
                <div class="songDetail">
                    <div v-if="sn.album.images != ''">
                         <img :src="sn.album.images[0].url" class="songPhoto">
                    </div>
                    <div v-else>
                        <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png" class="songPhoto">
                    </div>
                    <p class="songName">{{ sn.name }}</p>
                    <p class="artistName">{{ sn.artists[0].name }}</p>
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
            token: '',
            recived: {},
            songS: []
        }
    },
    methods:{
         search(){
            this.$http.get('https://api.spotify.com/v1/search',
                {   
                    params:{
                        q: this.recived,
                        type: 'track',
                    },
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token,
                    }
                }).then(
                response=>{
                    console.log(response)
                    this.songS = response.body.tracks.items
                }
            )
        },
    },
    mounted(){
        this.token = localStorage.getItem('token')
        this.recived = this.$route.params.txt
        this.search()
    }
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