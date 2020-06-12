<template>
    <div class="team">
        <div class="team__item" v-for="(item,index) in team" :key="index">
            <div class="team__content">
                <img :src="item.img" alt="">
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
    .team{
        display: flex;
        position: relative;
        &__content{
            display: flex;
            flex-direction: column;
        }
        &__item{
            flex-basis: 40px;
        }
        &__info{
            display: flex;
            flex-direction: column;
            position: absolute;
            top:200px;
            background-color: #171717;
            color:#fff;
            width: 260px;
        }
    }
</style>