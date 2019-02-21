<template>
    <div>
        <detail-banner 
        @hidden="clickToHidden"
        :sightName="sightName"
        :gallaryImgs="gallaryImgs"
        :bannerImg="bannerImg"
        :pageView="pageView"
        ></detail-banner>
        <detail-header></detail-header>
        <detail-list :lists="lists" :switcha="switcha"></detail-list>
    </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data(){
        return {
            switcha:false,
            sightName:'',
            gallaryImgs:[],
            bannerImg:'',
            lists:[],
            pageView:0
        }
    },
    methods:{
        clickToHidden(bollean){
            this.switcha = bollean
        },
        sendRequestForDetail(){
            axios.get('./api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.axiosRequestSucc)
        },
        axiosRequestSucc(res){
            res = res.data;
            if(res.ret && res.data){
                this.lists = res.data.categoryList;
                this.sightName = res.data.sightName;
                this.gallaryImgs = res.data.gallaryImgs;
                this.bannerImg = res.data.bannerImg;
                this.pageView = res.data.pageView;
            }
        }
    },
    mounted(){
        this.sendRequestForDetail();
    }

}
</script>

<style lang="stylus" scoped>

</style>


