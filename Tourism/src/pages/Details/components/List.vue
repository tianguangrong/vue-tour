<template>
    <div class="list-container" v-show="!switcha">
        <div v-for="(item,index) of lists" :key="index" class="list">
            <div class="border-bottom list-item">
                <span class="mp-ticketype-ticket"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="list-chlid">
                <detail-list :lists="item.children"></detail-list>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        lists:Array,
        switcha:{
            type:Boolean,
            default(){
                return false
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/common.styl';
    @import '~styles/minix.styl';
    .list-container
        .list
            padding .1rem .2rem
            overflow hidden
            .list-item
                padding .1rem .2rem
                .mp-ticketype-ticket 
                    display inline-block
                    position absolute
                    width .3rem
                    height .3rem
                    top .05rem
                    left -.15rem
                    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.55rem no-repeat
                    margin-right .1rem
                    background-size .3rem 2rem
            

</style>


