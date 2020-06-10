<template>
    <div>
        <div class="slider">
            <div class="slider__controls">
                <div class="slider__left">
                    <img src="../assets/Img/white-arrow.png" @click="Slide('prev')" height="40" alt="">
                </div>
                <div class="slider__right">
                    <img src="../assets/Img/white-arrow.png" @click="Slide('next')" height="40" alt="">
                </div>
            </div>
            <div class="slider__content">
                <div class="slider__item">
                    <p class="slider__title">{{slide.title}}</p> 
                    <p class="slider__text">{{slide.text}}</p>
                    <p class="slider__text">{{slide.author}}</p>               
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'slider',
    data(){
        return{
            idx:0,
            Content:[
                {
                    title:'What Other Say',
                    text:`“Cusantium natus error sit omnis iste natus error
                           sit voluptatem accusantium. Sed ut perspiciatis unde omnis
                           iste natus error sit volupt atem uzem.”`,
                    author:'Ellena Simon'
                },
                {
                    title:'What Other Say',
                    text:`“Voluptatem accusantium ed ut perspiciatis unde omnis
                           iste natus error sit voluptatem. 
                           Cusantium natus error sit omnis iste natus error sit ”`,
                    author:'Loman Segal'
                },
                {
                    title:'What Other Say',
                    text:`“Sed ut perspiciatis unde omnis iste natus error sit 
                           voluptatem cusantium natus error sit 
                           omnis iste natus error sit voluptatem accusac ntium uli.”`,
                    author:'Nick Tubon'
                },
            ]
        }
    },
    methods: {
        Slide(val){
            if(val === 'next'){
                this.idx <0 ? this.idx = 3 : this.idx += 1;
            }else{
                this.idx >3 ? this.idx = 1 : this.idx -= 1;
            }
        }
    },
    computed: {
        slide(){
            return this.Content[this.idx];
        }
    },
}
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';

    .slider{
        background: url('https://diefinnhutte.qodeinteractive.com/wp-content/uploads/2018/11/black-home-parallax-1.jpg') no-repeat;
        background-size: cover;
        background-attachment: fixed;
        display: flex;
        justify-content: center;
        padding:10% 6%;
        &__content{
            overflow: hidden;
            color: #fff;
            width:35%;
            display: flex;
            text-align:center;  
        }
        &__title{
            @include Text(50px,500,#fff,0.01em);
        }
        &__text{
            @include Text(22px,500,rgb(226, 226, 226),0.01em);
        }
        &__item{
            flex-basis: 100%;           
        }
        &__left{
            transform: rotate(180deg);
            cursor: pointer;
        }
        &__right{
            cursor: pointer;
        }
        &__controls{
            position: absolute;
            display: flex;
            width: 38%;
            margin: 150px 0px;
            justify-content: space-between;
        }
    }
</style>