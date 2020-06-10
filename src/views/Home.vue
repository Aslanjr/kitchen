<template>
    <div class="Home">
        <Header/>
        <Category/>
        <Clients/>
        <Slider/>
        <Interior/>
        <Story/>
    </div>
</template>
<script>

import Header from '../components/header'
import Category from '../components/category'
import Clients  from '../components/clients'
import Slider   from '../components/slider'
import Interior from '../components/interior'
import Story    from '../components/story'

export default {
    name:'App',
    data:()=>{
        return{

        }
    },
    components:{
        Header,
        Category,
        Clients,
        Slider,
        Interior,
        Story,
    }

}
</script>
<style lang="scss" scoped>
</style>