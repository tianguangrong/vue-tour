<template>
    <div class="city-list-container" :ref="'wrapper'">
       <div>
            <div class="currenti-title border-topbottom">
                <span class="title">当前城市</span>
            </div>
            <div class="currenti-city">
                <div class="button-box">
                    <div class="button">{{this.city}}</div>
                </div>
            </div>

            <div class="hot-title border-topbottom">
                <span class="title">热门城市</span>
            </div>
            <div class="hot-city">
                <div class="button-box" v-for="item of hotCities" :key="item.id">
                    <div class="button" @click="selecCity(item.name)">{{item.name}}</div>
                </div>
        
            </div>
            <div class="area" v-for="(items,key) of cities" :key="key" :ref="key">
                <div class="list-title border-topbottom">
                    <span class="title">{{key}}</span>
                </div>
                <div class="city" v-for="(city,index) of items" :key="index">
                    <div class="city-item border-bottom" @click="selecCity(city.name)">{{city.name}}</div>
                    
                </div>
            </div>

       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex'
export default {
    name:'CityList',
    props:{
        hotCities:Array,
        cities:Object,
        letter:String
    },
    computed:{
        ...mapState({
            city:'city'
        })
    },
    methods:{
        selecCity(city){
            this.changeCity(city)
            this.$router.push("/")
        },
        ...mapMutations(['changeCity'])
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{ click: true, tap: true })
    },
    watch:{
        letter(){
            if(this.letter){
                const ele = this.$refs[this.letter][0];
                this.scroll.scrollToElement(ele)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/common.styl';
    @import '~styles/minix.styl'; 

    .city-list-container
        font-size 0.2rem
        position absolute
        top 1.42rem
        bottom 0
        left 0
        right 0
        overflow hidden
        .border-topbottom
            &:before
                border-color #cccccc
            &:after
                border-color #cccccc
        .currenti-title
        .hot-title
            width 100%
            background $bgGray
            padding .08rem 0.2rem
        .currenti-city
        .hot-city
            width 100%
            padding 0.2rem
            box-sizing border-box
            overflow hidden
            .button-box
                width 30%
                text-align center
                padding .05rem 0
                margin 0.1rem 0.1rem 0 0
                border-radius .06rem
                float left
                border 1px solid  #ccc
                box-sizing border-box
        .area
            .list-title
                width 100%
                background $bgGray
                padding .08rem 0.2rem    
            .city
                .city-item
                    width 100%
                    height .6rem
                    line-height .6rem
                    padding-left .2rem



</style>


