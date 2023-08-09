import axios from "axios";

const API_KEY = 'ebc43eabf42a643721659da042b16b81'
export const API_URL = `https://api.openweathermap.org/data/2.5/weather`


const $api = axios.create({
    baseURL: API_URL
})

export default $api


export const fetchCurrentCityWeatherData = async (city: string) => {
    return await $api.get(`?q=${city}&appid=${API_KEY}&units=metric`)
}