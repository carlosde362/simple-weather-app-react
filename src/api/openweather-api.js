import axios from 'axios';

const TOKEN_API = import.meta.env.VITE_TOKEN_API_OPENWEATHER;
const OPTIONS_API = 'units=metric&lang=es';
const EXCLUDE_API = 'exclude=minutely,hourly,current,alerts,flags';
const API_URL_BASE = 'https://api.openweathermap.org/data/2.5';

export async function getCurrentWeatherFromCity(city) {
    const query = `${API_URL_BASE}/weather?q=${city}&appid=${TOKEN_API}&${OPTIONS_API}`;
    const response = await axios.get(query);
    const weatherNextDays = await getWeatherNextFourDays(response.data.coord.lon, response.data.coord.lat);
    return {
        current: response.data,
        nextDays: weatherNextDays.slice(0, 4)
    };
}

export async function getWeatherNextFourDays(lon, lat) {
    const query = `${API_URL_BASE}/onecall?&lat=${lat}&lon=${lon}&appid=${TOKEN_API}&${OPTIONS_API}&${EXCLUDE_API}`;
    const response = await axios.get(query);
    return response.data.daily;
}
