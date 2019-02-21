<template>
    <ul class="alphabet-list-container">
       <li 
            v-for="(l,i) of letters" 
            :key="i" 
            :ref="l"
            @click="clickLetter"
            @touchstart.prevent="launchMoveStart"
            @touchmove="launchMoveMove"
            @touchend="launchMoveEnd"
            >{{l}}</li>
            
    </ul>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'CityAphabet',
    props:{
        letters:Array
    },
    data(){
        return{
            moveFlag:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY = this.$refs["A"][0];
    },
    methods:{
        clickLetter(e) {
            this.$emit("change",e.target.innerHTML);
        },
        launchMoveStart(e){
            this.moveFlag = true;
        },
        launchMoveMove(e){
            
                if(this.moveFlag){
                    if(this.timer){
                        clearTimeout(this.timer)
                    }
                    this.timer = setTimeout(()=>{
                        const top = this.startY.offsetTop;
                        const clientY = e.touches[0].clientY;
                        const index = Math.floor((clientY-70)/20);
                        if(index >= 0 && index < 25){
                            this.$emit("change",this.letters[index]);
                        }
                    },15)
                }
            
            
        },
        launchMoveEnd(e){
            this.moveFlag = false;
        },
    }
   
}
</script>

<style lang="stylus" scoped>
    @import '~styles/common.styl';
    @import '~styles/minix.styl'; 

    .alphabet-list-container
        color $bgColor
        position absolute
        top 1.5rem
        right 0
        bottom 0
        padding 0 .1rem
        flexC()
        justify-content center
        align-items center
        li
            width .4rem
            text-align center
            height .4rem
            line-height .4rem



</style>


