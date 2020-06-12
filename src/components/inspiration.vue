<template>
    <div class="inspiration">
        <div class="inspiration__content">
            <p class="inspiration__title">Interior Design</p>
            <p class="inspiration__text">Inspiration Everyday</p>
        </div>
        <div class="inspiration__item">
            <div class="targets" v-for="(item,index) in targets" :key="index">
                <img :src="item.img" class="targets__img" alt="">
                <p class="targets__title">{{item.title}}</p>
                <p class="targets__text">{{item.text}}</p>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:'Inspiration',
    data(){
        return{

        }
    },
    computed: {
        targets(){
            return this.$store.state.Targets.targets
        }
    },
}
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';

    .inspiration{
        background: #171717;
        color: #fff;
        &__content{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__item{
            display: flex;
            flex-wrap: wrap;
            padding:2% 10%;
        }
        &__title{
            @include Text(15px,600,#fff,-0.05em);
            font-family: sans-serif;
            text-transform: uppercase;
            margin: 120px 0px 20px 0px;
        }
        &__text{
            @include Text(55px,500,#fff,0.02em);
            margin: 0px 0px 40px 0px;
        }
    }
    .targets{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: 25%;
        margin: 0px 0px 100px 0px;
        &__title{
            @include Text(21px,600,#fff,0.05em);
            font-family: sans-serif;
        }
        &__text{
            @include Text(15px,500,#fff,0.05em);
            font-family: sans-serif;
            text-align: center;
            padding: 0px 35px;
            margin: 0;
        }
    }
</style>