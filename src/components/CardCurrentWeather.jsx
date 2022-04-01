import './CardCurrentWeather.css';

export default function CardCurrentWeather(props) {
    if (!props.weather) {
        return (
            <div className="bg-white bg-opacity-50 p-4 rounded-lg text-black flex flex-row gap-4 items-center">
                <h1>Para empezar busca una ciudad</h1>
                <span className="material-icons border-radius-50 bg-slate-600 p-1 animate-bounce bg-opacity-50">
                    arrow_circle_up
                </span>
            </div>
        )
    }
    return (
        <div className="bg-white bg-opacity-50 p-4 rounded-lg text-black flex flex-col gap-4 items-center w-auto">
            <h1 className="text-5xl">{props.weather.name}</h1>
            <span className="text-4xl capitalize">{props.weather.weather[0].description}</span>
            <div className='flex flex-row items-center'>
                <img src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@4x.png`} alt="icon-weather" />
                <span className="text-4xl">{Math.round(props.weather.main.temp)}ºC</span>
            </div>
        </div>
    )
}