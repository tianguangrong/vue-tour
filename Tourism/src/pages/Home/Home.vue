/* eslint-disable */
<template>
    <div>
       <home-header :city='city'></home-header>
       <header-swiper :swiperList='swiperList'></header-swiper>
       <slide-icons :slideLists='iconList'></slide-icons>
       <home-recommend :recommendList='recommendList'></home-recommend>
       <home-weekend :weekendList='weekendList'></home-weekend>
    </div>
</template>
<script>
import HomeHeader from './components/Header'
import HeaderSwiper from './components/Swiper'
import SlideIcons from './components/Icon'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import Vuex from 'vuex'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components:{
    HomeHeader,
    HeaderSwiper,
    SlideIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data(){
    return {
      lastCity:'',
      swiperList:[],
      city:'',
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState({
      curCity:'city'
    })
  },
  methods:{
    axiosRequest(){
      var captureData = axios.get(`/api/data.json?city=${this.curCity}`);
      captureData.then(this.axiosPintData)
      this.lastCity = this.curCity
    },
    axiosPintData(res){
     if(!res.data.ret) return;
     const data = res.data.data;
     this.swiperList = data.swiperList;
     this.city = data.city;
     this.iconList = data.iconList;
     this.recommendList = data.recommendList;
     this.weekendList = data.weekendList;
    }
  },
  mounted(){
    this.axiosRequest()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.curCity;
      this.axiosRequest()
    }
  }
}
</script>

<style scoped>

</style>