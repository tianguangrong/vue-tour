/* eslint-disable */
<template>
    <div class="header">
       <router-link to="/">
           <div class="header-left">
              <span class="iconfont">&#xe600;</span>
            </div>
       </router-link>
        <div class="header-input"><span class="iconfont">&#xe8c9;</span>输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
                <span :alt="this.$store.state.city" class="city">{{this.$store.state.city}}</span>
                <span class="iconfont icon-indent">&#xe601;</span>
        </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props:{
      city:String
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/common.styl';
    @import '~styles/minix.styl';
    .header
        display flex
        flex-direction row
        height 0.86rem
        align-items center
        color #fff
        width 100%
        box-sizing border-box
        padding 0 0 0 0.2rem
        background $bgColor
        color white
        .header-input 
            flex 1
            height 0.6rem
            background white
            border-radius 5px
            display flex
            align-items center
            margin 0 0 0 0.2rem
            color gray
            padding-left 0.1rem
        .header-left
            color #ffffff
        .header-right
            min-width 1.5rem
            margin-left 0.1rem
            color #ffffff
            .icon-indent
                font-size 0.24rem
                width 0.5rem    
            .city
                display inline-block
                min-width 1rem  
                text-align center
</style>