<template>
    <div class="rec-container">
        <div class="hot-rec">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <router-link tag="div" :to="'/detail/'+list.id" v-for="list of recommendList" :key="list.id" class="rec-box border-bottom">
            <div class="img"><img :src="list.imgUrl" :alt="list.title"></div>
            <div class="detail">
                <div class="addr">{{list.title}}</div>
                <div class="recommends">
                    <div class="star">
                        <span v-for="(star,index) of stars" :key="index" v-if="index < list.star" class="iconfont">&#xe602;</span>
                        
                    </div>
                    <div class="fill-remaining-space"></div>
                    <div class="remark">
                        <span>{{list.remark}}</span><span>条评论</span>
                    </div>
                </div>
                <div class="price-add">
                    <div class="price">
                        <span class="m">{{list.price}}</span><span>起</span>
                    </div>
                    <div class="fill-remaining-space"></div>
                    <div class="posi">{{list.posi}}</div>
                </div>
                <div class="intro">{{list.desc}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommendList:Array
    },
    data(){
        return{
            stars:['&#xe602;','&#xe602;','&#xe602;','&#xe602;','&#xe602;']
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/minix.styl';
    .rec-container >>> .fill-remaining-space
        flex 1
    .rec-container
        flexC()
        .hot-rec
            width 100%
            box-sizing border-box
            background white
            padding 0 0.4rem
            height 0.8rem
            line-height 0.8rem
            font-size 0.4rem
            span
                vertical-align middle
            img 
                width 0.3rem
        .rec-box
            flexR()
            width 100%
            .img
                width 1.5rem
                height 1.5rem
                padding 0.1rem
                box-sizing border-box
                img 
                    width 1.5rem
            .detail
                flex 1
                padding 0.1rem 0.2rem
                width 4rem
                .addr
                    padding-top 0.3rem
                    font-size 0.3rem
                .recommends
                    margin-top 0.2rem
                    flexR()
                    align-items baseline
                    .star
                        color rgb(244, 234, 42)
                        width 2rem
                        span    
                            font-size 12px
                .price-add
                    flexR()
                    margin-top 0.2rem
                    .price
                        .m
                            color red
                            font-size 0.4rem
                    .posi
                        font-size 0.3rem
                .intro
                    height 0.62rem
                    background: #ffeef1
                    color: #fd4343
                    margin-top 0.3rem
                    font-size 0.25rem
                    letter-spacing 1.5px
                    elipse2line()
                    padding-top .1rem
                    box-sizing border-box


</style>
