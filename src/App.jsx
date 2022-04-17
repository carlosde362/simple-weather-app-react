import { useState } from 'react'
import SearchInput from './components/SearchInput'
import { getCurrentWeatherFromCity } from './api/openweather-api';
import CardCurrentWeather from './components/CardCurrentWeather';
import CardNextDays from './components/CardNextDays';
import Footer from './components/Footer';

function App() {
  const [valueInput, setValueInput] = useState('');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [nextDaysWeather, setNextDaysWeather] = useState(null);

  const changeValue = async (e) => {
    if (!e) {
      return;
    }
    const data = await getCurrentWeatherFromCity(e);
    setCurrentWeather(data.current);
    setNextDaysWeather(data.nextDays);
  }

  return (
    <div className='flex flex-col justify-between h-full w-full bg-zinc-700 '>
      <div className="flex flex-col items-center pt-4 gap-4">
        <SearchInput value={changeValue} />
        <CardCurrentWeather weather={currentWeather} />
        <CardNextDays weather={nextDaysWeather} />
      </div>
      <Footer />
    </div>

  )
}

export default App
