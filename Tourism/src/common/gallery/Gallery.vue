<template>
    <div class="gallery-content" @click="bannerToClick">
        <div class="wrapper">
            <swiper :options="swiperOption">
            <!-- slides -->
                <swiper-slide  v-for="(item,index) of bannerImg" :key="index">
                    <img class="gallery-img" :src="item">
                </swiper-slide>
                
                <!-- Optional controls -->
                <div class="swiper-pagination swiper-fraction"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallery',
    data(){
        return {
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination',
                    type: 'fraction'
                },
                loop:true
            }
            
        }
    },
    props:{
        bannerImg:{
            type:Array,
            default(){
                return ([
                    'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg'
                ])
        }
        },
        
    },
    methods:{
        bannerToClick(){
            this.$emit('close');
        }
    }
}
</script>

<style lang="stylus" scoped>
    .gallery-content >>> .swiper-container
        overflow inherit 
        width 100%
    .gallery-content
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background #000
        color #fff
        width 100%
        display flex
        justify-content center
        align-items center
        z-index 1
        .wrapper
            width 100%
            display flex
            justify-content center
            align-items center
            .swiper-fraction
                bottom -2rem
            .gallery-img
                width 100%
</style>


