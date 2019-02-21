<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" v-model="keyWord" placeholder="输入城市名或拼音">
        </div>
        <div class="search-list"  :ref="'content'" v-show="show">
            <ul>
                <li 
                    class="search-item border-bottom" 
                    v-for="list of lists" 
                    :key="list.id" 
                    @click="selecCity(list)">{{list}}</li>
                <li class="search-item border-bottom" v-show="hasNoData">没有查询到匹配的结果~</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import { mapState,mapMutations } from 'vuex';
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return {
            keyWord:'',
            timer:null,
            lists:[],
            show:false,
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.content)
    },
    computed:{
        hasNoData(){
            return !this.lists.length
        }
    },
    methods:{
        selecCity(city){
            this.changeCity(city);
            this.$router.push("/")
        },
        ...mapMutations(['changeCity'])
    },
    watch:{
        keyWord(){
            //console.log(JSON.stringify(this.cities))
            let result = [] ;
            if(this.timer){
                clearTimeout(this.timer);
            }
            if(!this.keyWord) {
                this.lists = [];
                this.show = false;
                return ;
            }
            this.show = true
            this.timer = setTimeout(()=>{
                for (const i in this.cities) {
                    if (this.cities.hasOwnProperty(i)) {             
                        const list = this.cities[i] 
                        list.forEach(target => {
                           //console.log(target.spell) 
                           if(
                               target.spell.indexOf(this.keyWord) != -1 
                               || target.name.indexOf(this.keyWord) != -1 
                            ) {
                                result = [...result,target.name]
                           }
                        });                
                    }
                }
                this.lists = result;
            },200)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/minix.styl'
    @import '~styles/common.styl'
    .search
        width 100%
        box-sizing border-box
        height .62rem
        padding 0.05rem 0.1rem
        background $bgColor
        .search-input
            width 100%
            color #666
            border-radius 0.08rem
            height 0.45rem
            box-sizing border-box
            text-align center
            font-size 0.25rem
    .search-list
        position absolute
        top 1.4rem
        left 0
        right 0
        bottom 0
        background #eee
        z-index 10
        overflow hidden
        .search-item
            background white
            padding 0.1rem 0.2rem
        .border-bottom
            &:before
                background #eee

</style>


