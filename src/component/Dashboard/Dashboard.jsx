import React, { useState } from 'react'
import Currentweather from '../CurrentWeather/Currentweather';
import Forecast from '../Forecast/Forecast';
import './Dashboard.css'
import Toggle from '../Togglebutton/Toggle';
export default function Dashboard() {
    const [city, setCity] = useState('');
    const [unit, setUnit] = useState('metric');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const API_KEY = "32a5bb7b9aa1126387e06acad817149e";
    const API_URL_CURRENT = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;
    const API_URL_3HOURS = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;
    const handleSearch = () => {
        fetchWeatherData(city);
        fetchForecastData(city);
    };
    //
    const fetchWeatherData = (city) => {
        fetch(API_URL_CURRENT + "&q=" + city)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
                console.log("wether", data)
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };

    const fetchForecastData = (city) => {
        fetch(API_URL_3HOURS + "&q=" + city)
            .then(response => response.json())
            .then(data => {
                const groupedForecast = groupForecastByDay(data.list);
                setForecastData(groupedForecast);
                console.log("Forcast", groupedForecast);
            })
            .catch(error => {
                console.error('Error fetching forecast data:', error);
            });
    };

    // Helper function to group forecast data by day
    const groupForecastByDay = (forecastList) => {
        const groupedForecast = {};
        forecastList.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!groupedForecast[date]) {
                groupedForecast[date] = [];
            }
            groupedForecast[date].push(item);
        });
        return groupedForecast;
    };
    return (
        <div className='searchContainer'>
            <h1 className="heading">Weather Forecast App

            </h1>
            <div className="search" >
                <input
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="input"
                />
                <button onClick={handleSearch} className="button">Search</button>
                <Toggle unit={unit} setUnit={setUnit} />
            </div>
            {weatherData && forecastData && (
                <div className="weather-container">
                    <Currentweather weatherData={weatherData} unit={unit} />
                    <Forecast forecastData={forecastData} unit={unit} />
                </div>
            )}</div>
    )
}
