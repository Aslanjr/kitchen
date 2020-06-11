<template>
    <div class="story">
        <div class="story__item">
            <div class="story__name">Interior</div>
            <div class="story__title">Stunning Story </div>
            <div class="story__text">Sed ut perspiciatis unde omnis iste natus error
                 sit voluptatem accusantium natus error sit omnis iste natus error <br> sit voluptatem accusantium sed ut.
            </div>
            <div class="progress">
                <div class="progress__item" v-for="(item,index) in progressBars" :key="index">
                    <div class="progress__info">
                        <div class="progress__name">{{item.title}}</div>
                        <div class="progress__percent">{{item.count | percent}}</div>
                    </div>
                    <div class="progress__count">
                        <div class="progress__content">
                            <progress max="100" :value="item.count" class="progress__bar" height="50">
                            </progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="img story__item">
            <div class="img__content">
                <img src="../assets//Img/Story/black-home-img-2.jpg" class="img__item" alt="">
            </div>
            <div class="img__content">
                <img src="../assets//Img/Story/black-home-img-3.jpg" class="img__item" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Stroy',
    data(){
        return{
            progressCount:-700,
            progressBars:[
                {
                    title:'Interior Design',
                    count:65,
                },
                {
                    title:'Architecture',
                    count:87,
                },
                {
                    title:'Urban Planning',
                    count:92
                }
            ]
        }
    },
    computed: {
        currentProgress(){
            return `transform:translateX(${this.progressCount}px)`;
        },
        currentCount(){
            return this.currentProgressCount
        },
    },
    filters:{
        percent(value){
            return value + '%'
        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';

    .story{
        background: #171717;
        color:#fff;
        padding: 3% 5%;
        display: flex;
        justify-content: space-around;
        &__item{
            flex-basis: 40%;
        }
        &__name{
            @include Text(14px,600,#fff,0.01em);
            font-family: sans-serif;
            text-transform: uppercase;
        }
        &__title{
            margin: 20px 0px;
            @include Text(50px,500,#fff,0.1em);
            font-family: sans-serif;
        }
        &__text{
            @include Text(16px,500,rgb(172, 172, 172),0.02em);
            font-family: sans-serif;
            margin:0px 0px 20px 0px;
        }
        
    }
    .progress{
        &__content{
            display: flex;
            width: 600px;
            height: 25px;
            position: relative;
            overflow: hidden;
        }
        &__main{
            width: 600px;
            background: rgb(233, 233, 233);
            height: 5px;
            position: absolute;
            z-index: 2;
        }
        &__line{
            width: 600px;
            background: rgb(151, 151, 151);
            height: 5px;
            z-index: 1;
        }
        &__info{
            max-width: 600px;
            display: flex;
            justify-content: space-between;
            @include Text(16px,600,#fff,0.02em);
            font-family:sans-serif;
            margin: 10px 0px;
        }
        &__bar{
            display: block;
            color: #fff;
            border:none;
            background: #757575;
            box-sizing: border-box;
            width: 600px;
            height: 8px;
            line-height: 21px;
            font-size: 15px;
            font-family: sans-serif;
            text-align: center;
        }
    }
    .img{
        display: flex;
        justify-content: space-around;
        &__content{
            width: 100%;
            height: 100%;
            position: relative;
            overflow: hidden;
            margin:0px 5px;
        }
        &__item{
            width:120%;
            transition: all .45s ease-in-out;
            &:hover{
               transform: translateX(-40px);
            }
        }
    }
    ::-moz-progress-bar {
        background: #fff;
    }
</style>