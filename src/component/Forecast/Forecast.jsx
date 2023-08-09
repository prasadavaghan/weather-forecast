import React from 'react'
import './Forecast.css'
export default function Forecast({ forecastData, unit }) {
    const calculateAverageTemp = (forecastItems) => {
        const totalTemp = forecastItems.reduce((sum, item) => sum + item.main.temp, 0);
        const averageTemp = totalTemp / forecastItems.length;
        return Math.round(averageTemp); // Round the result for better readability
    };
    return (
        <div className="forecast" >
            {Object.keys(forecastData).map(date => {
                const forecastItems = forecastData[date];
                const averageTemp = calculateAverageTemp(forecastItems);
                const weatherDescription = forecastItems[0].weather[0].description;
                const weatherIcon = forecastItems[0].weather[0].icon;

                return (
                    <div key={date} className="forecast-item" >
                        <p>{date}</p>
                        <img
                            src={`https://openweathermap.org/img/w/${weatherIcon}.png`}
                            alt={weatherDescription}
                            className='forecastIcon'
                        />
                        <p>Avg Temp: {averageTemp}°{unit === 'metric' ? 'C' : 'F'}</p>
                        <p>Description: {weatherDescription}</p>
                    </div>
                );
            })}
        </div>
    )
}
