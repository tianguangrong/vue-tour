<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swipeLen">
        <!-- slides -->
        <swiper-slide  v-for="slide of swiperLists" :key="slide.id">
            <img class="swipe-img" :src="slide.imgUrl" :alt="slide.alt">
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HeaderSwiper',
    props:{
      swiperList:Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el:'.swiper-pagination'
          },
          loop:true
        }
      }
    },
    computed:{
      swiperLists(){
        return this.swiperList
      },
      swipeLen(){
        return this.swiperList.length
      }
    }
  }
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background white
    .wrapper
        width 100%
        height 0
        padding-bottom 31.2%
        background gray
        .swipe-img
            width 100%
            box-sizing border-box
</style>
