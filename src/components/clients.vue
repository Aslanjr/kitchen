<template>
    <div>
        <div class="clients">
            <div class="clients__item">
                <div class="clients__title">
                    <p>Stunning Story, Planning, Design, Interior, Urbanization</p>
                </div>
                <div class="clients__content">
                    <div class="clients__text">
                        Sed ut perspiciatis unde omnis iste natuser ror sit
                        voluptat em accusantium <br>  natus error  sitm omnis iste natus error  sit volupta tem accusantium.
                        Accusantium natus error siton. 
                    </div>
                    <div class="clients__links">
                        <div>
                            <li class="text__title">Clients</li>
                            <li class="text__link">DieFinnhutte</li>
                            <li class="text__link">Qode</li>
                        </div>
                        <div>
                            <li class="text__title">Clients</li>
                            <li class="text__link">Qode</li>
                            <li class="text__link">DieFinnhutte</li>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clients__item">
                <img src="../assets/Img/black-home-img.png"  alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Clients',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss">
@import '../assets/scss/mixins.scss';
    .clients{
        background: #171717;
        @include Flex(no-wrap,center);
        @include Text(17px,500,#fff,0.05em);
        padding:4% 10%;
        align-items: start;
        &__title{
            @include Text(50px,500,#fff,0.05em);
            font-family: sans-serif;
        }
        &__item{
            flex-basis: 60%;
            display: flex;
            flex-direction: column;
        }
        &__item:nth-child(2){
            flex-basis: 40%;
            @include Flex(no-wrap,flex-start);
            flex-direction: column;
            align-items: center;

        }
        &__content{
           display:flex;
           justify-content: space-between;
        }
        &__links{
            flex-basis: 25%;
            @include Flex(no-wrap,center);
            justify-content: space-between;
            list-style: none;
        }
        &__text{
            flex-basis: 75%;
            @include Text(18px,500,rgb(160, 160, 160),0.02em);
        }
        
    }
    .text__title{
        padding:10px 0px;
        @include Text(17px,500,#fff,0.001em);
    }
    .text__link{
        overflow: hidden;
        position: sticky;
        cursor:pointer;
        padding:5px 0px;
        @include Text(17px,500,rgb(160,160,160),0.0.2em);
        &:hover{
            &::after{
                display: block;
                transform: translateX(0px);
            }
        }
    }
    .text__link::after{
        overflow:hidden;
        transform-origin: left;
        transition: all .45s ease;
        transform: translateX(-100px);
        content:'';
        box-sizing:border-box;
        width:100%;
        height:2px;
        background:rgb(230,235,235); 
    }
</style>