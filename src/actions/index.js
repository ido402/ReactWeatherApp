
import axios from 'axios';

const API_KEY = '5e2196505aeed7d24a1873ca24469fbe';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=imperial`; //using template string ES6

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){

    const url = `${ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}