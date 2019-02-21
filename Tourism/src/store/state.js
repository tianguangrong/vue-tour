var defaultCity = '上海';
const storage = window.localStorage
try {
    if(storage.city){
        defaultCity = storage.city;
    }
} catch (error) {}

export default {
    city: defaultCity
}