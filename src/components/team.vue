<template>
    <div class="team">
        <div class="team__item" v-for="(item,index) in team" :key="index">
            <div class="team__content">
                <img :src="item.img" class="team__img" alt="">
                <div class="team__info">
                    <p class="team__job">{{item.job}}</p>
                    <p class="team__name">{{item.name}}</p>
                    <div class="team__links" >
                        <li class="team__link" v-for="(list,index) in item.links" :key="index">
                            {{list.title}}
                        </li>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'team',
    data(){
        return{

        }
    },
    computed: {
        team(){
            return this.$store.state.Team.team
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
    .team{
        display: flex;
        position: relative;
        width: 100%;
        &__content{
            display: flex;
            flex-direction: column;
            align-items: end;
            position: relative;
            overflow: hidden;
            &:hover .team__img{
                    transform: translateX(40px);
                }
            &:hover .team__info{
                display: block;
            }
        }
        &__img{
            width: 120%;
            transition: all .45s ease-in-out;
                
        }
        &__item{
            flex-basis:25%;
            background: #171717;
        }
        &__info{
            display: flex;
            display: none;
            animation: Anime .45s ease-in-out;
            flex-direction: column;
            position: absolute;
            top:550px;
            background-color: #171717;
            color:#fff;
            width: 360px;
            padding: 20px;
        }
        &__links{
            display: flex;
            list-style: none;
        }
        &__link{
            margin: 0px 10px 0px 0px;
            @include Text(15px,600,#fff,-0.01em);
            text-decoration-line: underline;
            font-family: sans-serif;
        }
        &__job{
            @include Text(14px,600,#fff,-0.01em);
            font-family: sans-serif;
            text-transform: uppercase;
        }
        &__name{
            @include Text(21px,600,#fff,0.01em);
            font-family: sans-serif;
        }
    }
    @keyframes Anime {
        0%{
            opacity: 0;
            transform: translateX(400px);
        }
        100%{
            opacity: 1;
        }
    }
</style>