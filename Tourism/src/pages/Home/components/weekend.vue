<template>
    <div class="qunar-container">
        <div class="qunar">周末去哪玩儿</div>
        <div class="product" v-for="list of weekendList" :key="list.id">
            <div class="product-img">
                <img :src="list.imgUrl" alt="">
            </div>
            <div class="product-intro">
                <p>{{list.title}}</p>
                <p class="intro-detail">{{list.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:{
        weekendList:Array
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/minix.styl';

    .qunar-container
        flexC()
        .qunar
            background #eee
            width 100%
            box-sizing border-box
            padding-left 0.4rem
            height 0.8rem 
            flexR()
            align-items center
            font-size 0.35rem
        .product
            .product-img
                width 100%
                height 0
                padding-bottom 37.5%
                img 
                    width 100%
            .product-intro
                width 100%
                height 1.6rem
                justify-content center
                font-size 0.32rem
                flexC()
                p
                    width 100%
                    padding-left 0.4rem
                .intro-detail
                    font-size 0.3rem
                    color darkgray 
                    margin-top 0.1rem
            
</style>


