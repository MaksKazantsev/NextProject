import {fetchCurrentCityWeatherData} from "@/api";

interface Params {
    params: {
        searchValue : string
    }
}
export default async function Page({params: {searchValue}} : Params) {
    const {data} = await fetchCurrentCityWeatherData(searchValue)
    return (
        <section>
            <h2>{data.name}</h2>
            <p>{data.main.temp}</p>
        </section>
    )
}
