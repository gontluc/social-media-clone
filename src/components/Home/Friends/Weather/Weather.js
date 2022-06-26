import './Weather.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Weather = () => {
    const [weatherData, setWeatherData] = useState({})

    const [weatherCity, setWeatherCity] = useState('Seville')

    const weatherAPIurl = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=75baf8dd3dcb1859ae668999c5b0482d`

    const userCity = (e) => {
        e.preventDefault()

        axios.get(weatherAPIurl).then((response) => {
            setWeatherData(response.data)
            setWeatherCity(response.data.name)
        }).catch(() => setWeatherCity(''))
    }

    useEffect(() => {
        axios.get(weatherAPIurl).then((response) => {
            setWeatherData(response.data)
        })
    },[])

    const kelvinToFar = (kelvin) => {
        const conversion = (kelvin - 273.15) * 9/5 + 32
        return (
            conversion.toFixed(1)
        )
    }

  return (
    <div className="api-div">
        <form onSubmit={userCity}>
            <input 
                type="text"
                value={weatherCity}
                onChange={(e) => setWeatherCity(e.target.value)}
                autoComplete='off'
                spellCheck={false}
                placeholder='Not a City'
                required={true}
            />
            <button type='submit'>My City</button>
        </form>
        <div className='api-item'>
            <div className="weather-icon">
                <img src={weatherData.weather && `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
            </div>

            <div className="temperature">{weatherData.main && kelvinToFar(weatherData.main.temp)} ºF</div>
        </div>

        <div className='api-item'>
            <div className="min-max-temperature">
                {weatherData.main && kelvinToFar(weatherData.main.temp_max)}º / {weatherData.main && kelvinToFar(weatherData.main.temp_min)}º
            </div>

            <div className="humidity">
                <div>{weatherData.main && weatherData.main.humidity}%</div>
            </div>
        </div>
    </div>
  )
}

export default Weather