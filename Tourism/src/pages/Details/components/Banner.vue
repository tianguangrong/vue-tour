<template>
    <div>
        <div class="img-container" @click="clickToShow">
            <div class="header-img">
                <img class="img" :src="bannerImg" alt="">
            </div>
            <div class="mp-headfeagure-info">
                <div class="mp-headfeagure-title">{{sightName}}</div>
            </div>
            <div class="mp-imgswipeicon">
                <div class="mp-headfeagure-title">
                    <span class="iconfont">&#xe616;</span>
                    <span class="num">{{pageView}}</span>
                </div>
            </div>
        </div>
        <opacity-anim>
            <common-gallery 
                @close="clickToClose" 
                v-if="show" 
                :bannerImg="gallaryImgs">
            </common-gallery>
        </opacity-anim>
        
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import OpacityAnim from 'common/fade/OpacityAnim'
export default {
    name:'DetailBanner',
    props:{
        sightName:String,
        gallaryImgs:Array,
        bannerImg:String,
        pageView:Number
    },
    data(){
        return {
            show:false

        }
    },
    components:{
        CommonGallery,
        OpacityAnim
    },
    methods:{
        clickToClose(){
            this.show = false;
            this.$emit("hidden",false)
        },
        clickToShow(){
            this.show = true;
            this.$emit("hidden",true)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/common.styl';
    @import '~styles/minix.styl';
    .img-container
        position relative
        .header-img
            overflow hidden
            width 100%
            height 0
            padding-bottom 55%
            .img
                width 100%
        .mp-headfeagure-info
            position absolute
            width 100%
            left .2rem
            right .2rem
            bottom .2rem
            min-height .4rem
            color white
            font-size .26rem
        .mp-imgswipeicon
            position absolute
            left .2rem
            bottom .8rem
            width 1.2rem
            height .4rem
            background rgba(0,0,0,0.8)
            border-radius 10px
            color white
            text-align center
            .mp-headfeagure-title
                height 100%
                width 100%
                display flex
                justify-content center
                align-items center
                .iconfont
                    font-size 12px


        
</style>


