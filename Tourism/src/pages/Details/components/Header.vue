<template>
    <div class="banner-container">
        <router-link tag="div" to="/" class="banner-abs" v-show="show">
            <span class="iconfont">&#xe600;</span>
        </router-link>
        <div class="banner-fixed"  v-show="!show" :style="{opacity:opacityStyl}">
            <div class="header-bar">
                <div class="header-scow">
                    <router-link to="/">
                        <div class="header-left">
                            <span class="iconfont">&#xe600;</span>
                            </div>
                    </router-link>
                </div>
                <div class="header-choose-city">
                    景点观光
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name:'DetailHeader',
    data(){
        return {
            show:true,
            opacityStyl:0
        }
    },
    components:{
        
    },
    methods:{
        handleScrollEvent(){
            let top = document.documentElement.scrollTop;
            if(top > 50){
                this.show = false;
                if( top<120){
                    let opac =  top/120
                    this.opacityStyl = opac > 1 ? 1 : opac;
                    return;
                }
            }else{
                this.show = true;

            }
        }
    },
    activated(){
        window.addEventListener('scroll',this.handleScrollEvent);
        //document.documentElement.scrollTop = 0 ;
    },
    deactivated(){
        window.removeEventListener('scroll',this.handleScrollEvent);
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/common.styl';
    @import '~styles/minix.styl';
    .banner-container >>> .banner-fixed
        position fixed
        width 100%
        top 0
        z-index 10
    .banner-container
        position absolute 
        top 0
        left 0 
        right 0
        .banner-abs
            width .8rem
            height .8rem
            line-height .8rem
            margin .1rem .2rem
            text-align center
            background rgba(0,0,0,.7)
            border-radius .4rem
            color #fff
        .banner-fixed
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


