import React from 'react'
import Layout from 'components/Layout'

const Weather = ({ weather, dateBuilder }) => {
    return (
        <div>
        <div className="location-box">
           <div className="location">
              {weather.name},
              {weather.sys.country}
           </div>
           <div className="date">
             {dateBuilder(new Date())}
           </div>
        </div>
        <div className="weather-box">
          <div className="temp">
            <Layout iconName={weather.weather[0].main}/>
            <div className="value">{ Math.round(weather.main.temp) }°c</div> 
          </div>
          <div className="weather">
            { weather.weather[0].main }
          </div>
        </div>
      </div>
    )
}

export default Weather
