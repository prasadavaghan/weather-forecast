import React from 'react'
import './CurrentWether.css'
export default function Currentweather({ weatherData, unit }) {
  return (
    <div className="current-weather">
      <img
        src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
        alt={weatherData.weather[0].description}
        className='weatherIcon'
      />
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Min: {weatherData.main.temp_min}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Max: {weatherData.main.temp_max}°{unit === 'metric' ? 'C' : 'F'}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind: {weatherData.wind.speed} m/s</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  )
}
