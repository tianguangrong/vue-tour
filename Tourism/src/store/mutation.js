export default {
    changeCity(state,city){
        state.city = city
        window.localStorage.city = city;
        try {
            window.localStorage.city = city;
        } catch (error) {}
    }
}