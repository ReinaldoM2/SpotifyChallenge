<template>
    <div class="container">
        <div class="container__image">
            <img src="../assets/img/logo.png" class="container__image__img" @click="$router.push({name: 'Home'})">
        </div>
        <div class="container__main">
            <img src="../assets/img/lupa.png" class="container__main__img">
            <input type="text" placeholder="Buscar Artista" class="container__main__search"  v-model="artist" @keyup.enter="search">
        </div>
         <div class="container__main">
            <img src="../assets/img/lupa.png" class="container__main__img">
            <input type="text" placeholder="Buscar Cancion" class="container__main__search" v-model="song" @keyup.enter="searchSong">
        </div>  
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            token: '',
            artist: '',
            song: '',
            artisT: [],
            songS:[]
        }
    },
    methods: {
        search(){
          if (this.artist != '') {this.$router.push({name: 'artistResult', params:{txt:this.artist, token: this.token}})
          this.artist = ''
          }
        },
        searchSong(){
          if (this.song != '') {
          this.$router.push({name: 'songResult', params:{txt:this.song, token: this.token}})
          this.song = ''
          }
        }
    },
    mounted(){
        this.token = localStorage.getItem('token')
    }
}
</script>
<style lang="scss">
    .container {
        display: flex;
        background-color: #262628;
        height: 80px;

        &__image {
            width: 15%;
            cursor: pointer;
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