<template>
    <div>
        <div class="interior">
            <div class="interior__title">
                <p >Interio Design</p>
                <p class="interior__text">Inspiration Everyday</p>
            </div>
            <div class="interior__content">
                <div class="interior__item" v-for="(item,index) in interior" :key="index">
                    <img class="interior__img" :src="item.img"  alt="">
                    <p class="Item__title">{{item.title}}</p>
                    <p class="Item__text">{{item.text}}</p>
                    <a class="Item__link" href="#">read more</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'interior',
    data(){
        return{

        }
    },
    computed: {
        interior(){
            return this.$store.state.Interior.interior;
        }
    },
}
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';

    .interior{
        background: #171717;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        color:#fff;
        &__content{
            width: 80%;
            display: flex;
            text-align:left;
        }
        &__title{
            text-transform: uppercase;
            margin:50px 0px;
            font-family: sans-serif;
            @include Text(15px,600,#fff,0.01em);
        }
        &__text{
            margin:0px 0px 45px 0px;
            text-transform: capitalize;
            @include Text(45px,500,#fff,0.15em);
            font-family: sans-serif;
        }
        &__img{
            height: 65%;
            width:120%;
            transition: all .45s ease-in-out;
                &:hover{
                    transform: translateX(-40px);
                }
            
        }
        &__item{
            overflow: hidden;
            flex-basis: 24%;
            margin: 0px 10px;
            
        }
    }
    .Item__title{
        @include Text(22px,600,#fff,0.02em);
        font-family: sans-serif;
        margin:10px 150px 0px 0px;
    }
    .Item__text{
        @include Text(16px,500,rgb(160,160,160),0.02em);
    }
    .Item__link{
        @include Text(18px,500,#fff,0.01em);
        cursor:pointer;
        text-decoration: none;
        transition: all .45s ease-in-out;
        
    }
    
</style>