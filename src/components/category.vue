<template>
    <div class="Main">
        <div class="Category">
            <div class="Category__item" v-for="(item,index) in content" :key="index">
                <img :src="item.img" />
                <h3>{{item.title}}</h3>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'category',
    data(){
        return{

        }
    },
    computed: {
        content(){
            return this.$store.state.Category.Category
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

    .Category{
        @include Flex(no-wrap,center);
        align-items: center;
        background:#171717;
        color:#fff;
        &__item{
            @include Flex(no-wrap,center);
            align-items: center;
            flex-direction:column;
            flex-basis:25%;
            overflow:hidden;
            img{
                width:120%;
                transition: all .45s ease-in-out;
                &:hover{
                    transform: translateX(-40px);
                }
            }
        }
    }
</style>