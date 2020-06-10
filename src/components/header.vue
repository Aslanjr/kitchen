<template>
    <div class="Home">
        <div class="Menu">
            <div class="Menu__item">
                <li v-for="(item,index) in Menu.slice(0,3)" class="Menu__nav" :key="index">
                    {{item.title}}
                    <div class="Menu__dropdown">
                        <li v-for="(list,idx) in item.drop" class="Drop__item" :key="idx">
                            {{list.title}}
                        </li>
                    </div>
                </li>
            </div>
            <div class="Menu__item">
                <h3>DIE</h3>
                <h2>/</h2>
                <h2>FINNHÜTTE</h2>
            </div>
            <div class="Menu__item">
                <li v-for="(item,index) in Menu.slice(3,6)" class="Menu__nav" :key="index">
                    {{item.title}}
                    <div class="Menu__dropdown">
                        <li v-for="(list,idx) in item.drop" class="Drop__item" :key="idx">
                            {{list.title}}
                        </li>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Head',
    data:()=>{
        return{
            
        }
    },
    computed: {
        Menu(){
            return this.$store.state.Header.Menu
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';
    .Home{
        background:#171717;
        padding: 4% 0%;
        color:#fff;
        font-weight: bold;
        font-family: sans-serif;
        font-size: 14px;
    }    
    .Menu{
        @include Flex(no-wrap,space-around);
        align-items: center;
        padding: 0% 28%;
        &__dropdown{
            max-height: 300px;
            background:#171717;
            animation: Anime .45s ease;
            margin: 10px 10px 10px 0px;
            padding: 20px 0px;
            position:absolute;
            display: none;
        }
        &__item{
            @include Flex(no-wrap,center);
            flex-basis: 40%;
            list-style: none;
        }
        &__nav{
            flex-basis: 30%;
            &:hover .Menu__dropdown{
                display: block;
            }
        }
    }
    .Drop__item{
        padding: 6px 50px 6px 20px;
        color:#fff;
    }
    @keyframes Anime {
        0%{
            opacity: 0;
            max-height: 0px;
        }
        100%{
            opacity: 1;
            max-height: auto;
        }
    }
</style>