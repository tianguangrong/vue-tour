<template>
    <div>
        <swiper  :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
            <div class="icons-container">
                <div class="icons"  v-for="item of page" :key="item.id">
                    <img class="img" :src="item.imgUrl" :alt="item.alt">
                    <p class='img-desc'>{{item.desc}}</p>
                </div>
            
            </div>
        </swiper-slide>
    </swiper>
    </div>
</template>

<script>
export default {
    name:"SlideIcons",
    props:{
        slideLists:Array
    },
    data(){
        return{
            swiperOption:{
                autoplay:false
            }
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.slideLists.forEach((item,index)=>{
                var page = Math.floor(index/8);
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page]=[...pages[page],item]
            })
            return pages;
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/minix.styl';
    .icons-container
        width 100%
        box-sizing border-box
        height 0
        padding-bottom 50%
        display flex
        flex-direction row
        flex-wrap wrap
        .icons
            width 25%
            height 0
            padding-bottom 25%
            box-sizing border-box
            display flex
            flex-direction column
            justify-content normal 
            align-items center
            .img
                width 0.8rem
                margin-top 0.1rem
                margin-bottom 0.1rem
            .img-desc
                    width 90%
                    text-align center
                    padding-bottom 0.5rem
                    elipse()

</style>


