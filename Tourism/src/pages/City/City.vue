<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list
            :hotCities="hotCities"
            :cities="cities" 
            :letter="letter"></city-list>
        <city-alphabet 
            :letters="letters" 
            @change="achieveLetterMsg"
            ></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios';

export default {
    name:'City',
    data(){
        return {
            hotCities:[],
            cities:{},
            letters:[],
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        axiosRequest(){
           axios.get("/api/city.json")
            .then(this.axiosRequestSucc) 
        },
        axiosRequestSucc(res){
            const data = res.data.data;
            if(!res.data.ret) return;
            this.hotCities = data.hotCities;
            this.cities = data.cities;
            for (const letter in data.cities) {
                if (data.cities.hasOwnProperty(letter)) {
                    this.letters = [...this.letters,letter]
                }
            }

        },
        achieveLetterMsg(e){
            this.letter = e ;
        }

    },
    mounted(){
        this.axiosRequest();
    }
}
</script>

<style lang="stylus" scoped>

</style>
