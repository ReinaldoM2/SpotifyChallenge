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
            <div class="artistCard" v-for="art in artists" :key="art.id" @click="artistInfo(art.id)">
                <div v-if="art.images != ''">
                    <img :src="art.images[0].url" class="artistPhoto">
                </div>
                <div v-else>
                    <img src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder-300x200.png" class="artistPhoto">
                </div>
                <p class="artistName">{{ art.name }}</p>
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
            artists: []
        }
    },
    methods:{
         search(){
            this.$http.get('https://api.spotify.com/v1/search',
                {   
                    params:{
                        q: this.recived,
                        type: 'artist',
                    },
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+this.token,
                    }
                }).then(
                response=>{
                    console.log(response)
                    this.artists = response.body.artists.items
                }
            )
        },

        artistInfo(id){
            this.$router.push({name: 'Artist', params:{id: id, tok: this.token}})
        }
    },
    mounted(){
        this.token = this.$route.token
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