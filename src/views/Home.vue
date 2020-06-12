<template>
    <div class="Home">
        <Header/>
        <Category/>
        <Clients/>
        <Slider/>
        <Interior/>
        <Story/>
        <Info/>
        <Inspiration/>
        <Team/>
    </div>
</template>
<script>

import Header       from '../components/header'
import Category     from '../components/category'
import Clients      from '../components/clients'
import Slider       from '../components/slider'
import Interior     from '../components/interior'
import Story        from '../components/story'
import Info         from '../components/info'
import Inspiration  from '../components/inspiration'
import Team         from '../components/team'

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
        Info,
        Inspiration,
        Team
    }

}
</script>
<style lang="scss" scoped>
</style>