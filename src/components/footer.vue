<template>
    <div class="footer">
            <div class="footer__item">
                <p class="mainText">
                    Our Company <br>  Is Here 4u
                </p>
                <p class="text">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                </p>
                <p class="link">read more</p>
            </div>
            <div class="footer__item">
                <div>
                    <p class="title">post</p>
                    <p class="text">Stunning On All <br>Screens </p>
                    <p class="date">22. Nov 2018 </p>
                </div>
                <div>
                    <p class="text">Choose Your</p>
                    <p class="text">Favorite Demo</p>
                    <p class="date">22. Nov 2018</p>
                </div>
            </div>
            <div class="footer__item">
                <p class="title">Projects</p>
                <p class="text">Urban Landscapes</p>
                <p class="text">Architecture</p>
                <p class="text">BooLedo Mitam</p>
                <p class="text">Urban Landscapes</p>
                <p class="text">Architecture</p>
            </div>
            <div class="footer__item">
                <p class="title">Contact</p>
                <p class="text">diefinnhutte@qode.com</p>
                <p class="text">+3245 2345 5674</p>
                <p class="text">instagram</p>
                <p class="text">twitter</p>
                <p class="text">pinterest</p>
            </div>
    </div>
</template>
<script>
export default {
    name:'footer',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';    
    .footer{
        display: flex;
        justify-content:space-around;
        padding: 5% 10%;
        background-color: #171717;
        color: #fff;
        &__item{
            flex-basis: 25%;
        }
    }
    .mainText{
        @include Text(25px,600,#fff,0.05em);
        font-family: sans-serif;
    }
    .title{
        @include Text(14px,600,#fff,0.05em);
        text-transform: uppercase;
        font-family: sans-serif;
    }
    .text{
        @include Text(15px,600,rgb(160,160,160),0.01em);
        font-family: sans-serif;
    }
    .link{
        @include Text(15px,600,#fff,0.02em);
        font-family: sans-serif;
        text-decoration: underline;
    }
    .date{
         @include Text(15px,600,#fff,0.01em);
        font-family: sans-serif;
    }
</style>