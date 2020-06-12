<template>
    <div class="project">
        <div class="project__item" v-for="(item,index) in project" :key="index">
            <img :src="item.img" class="project__img" alt="">
            <p class="project__title">{{item.title}}</p>
            <p class="project__text">{{item.text}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'Info',
    data(){
        return{
            project:[
                {
                    img:require('../assets/icons/black-home-icon-1.png'),
                    title:'Our Mission',
                    text:'Sed ut perspiciatis unde ois iste natus error sit volupta'
                },
                {
                    img:require('../assets/icons/black-home-icon-2.png'),
                    title:'Analysing',
                    text:'Sed ut perspiciatis unde ois iste natus error sit volupta'
                },
                {
                    img:require('../assets/icons/black-home-icon-3.png'),
                    title:'Working',
                    text:'Sed ut perspiciatis unde ois iste natus error sit volupta'
                },
                {
                    img:require('../assets/icons/black-home-icon-4.png'),
                    title:'Solution',
                    text:'Sed ut perspiciatis unde ois iste natus error sit volupta'
                },
            ]
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';

    .project{
        background-image: url('../assets/Img/black-home-parallax-2.jpg');
        background-attachment: fixed;
        color:#fff;
        display: flex;
        justify-content: space-around;
        padding: 7% 15%;
        &__item{
            display: flex;
            flex-basis: 25%;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            align-items: center;
            &::after{
                content:'1';
                display: block;
                box-sizing: border-box;
                width: 50px;
                height: 50px;
                color: #000;
                text-align: center;
                padding: 15px 0px ;
                background: #fff;
                border: 1px solid #fff;
                border-radius: 50%;
                position: relative;
                left: 30%;
                bottom: 100%;
            }
            &:nth-child(2)::after{
               content:'2'; 
            }
            &:nth-child(3)::after{
               content:'3'; 
            }
            &:nth-child(4)::after{
               content:'4'; 
            }
        }
        &__title{
            @include Text(18px,600,#fff,0.01em);
            font-family: sans-serif;
        }
        &__text{
            @include Text(14px,600,#fff,0.01em);
            font-family: sans-serif;
            padding: 0px 50px;
            
        }
    }
</style>