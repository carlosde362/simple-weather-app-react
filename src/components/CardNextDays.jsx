export default function CardNextDays(props) {
    if (!props.weather) {
        return null;
    }

    const daysWeeks = {
        0: 'Domingo',
        1: 'Lunes',
        2: 'Martes',
        3: 'Miercoles',
        4: 'Jueves',
        5: 'Viernes',
        6: 'Sabado'
    }
    let dayOfWeek = new Date().getDay();

    const listNextDays = props.weather.map((weatherDay, index) => {
        const dayWeek = daysWeeks[dayOfWeek];
        dayOfWeek++;
        return (
            <div className="flex flex-col justify-around items-center" key={index}>
                <span className="text-5xl sm:text-2xl">{dayWeek}</span>
                <span className="capitalize">{weatherDay.weather[0].description}</span>
                <div className="flex flex-row gap-3">
                    <span>{Math.round(weatherDay.temp.max)}ºC</span>
                    <span>{Math.round(weatherDay.temp.min)}ºC</span>
                </div>
                <img src={`https://openweathermap.org/img/wn/${weatherDay.weather[0].icon}@2x.png`} alt="icon-weather" />
            </div>
        )
    });

    return (
        <>
            <div className="bg-white bg-opacity-50 p-4 rounded-lg text-black mb-8 flex flex-col gap-4 lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
                {listNextDays}
            </div>
        </>
    )
}