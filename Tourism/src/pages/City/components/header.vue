<template>
    
    <div class="header-bar">
        <div class="header-scow">
            <router-link to="/">
                <div class="header-left">
                    <span class="iconfont">&#xe600;</span>
                    </div>
            </router-link>
        </div>
        <div class="header-choose-city">
            城市选择
        </div>
    </div>
</template>

<script>

export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/minix.styl'
    @import '~styles/common.styl'

    .header-bar
        width 100%
        height .8rem
        line-height .8rem
        box-sizing border-box
        background $bgColor
        padding 0 0.2rem
        position relative
        .header-choose-city
            width 100%
            text-align center
            color #ffffff
        .header-scow
            position absolute
            left 0.2rem
            .header-left
                color #ffffff

</style>


