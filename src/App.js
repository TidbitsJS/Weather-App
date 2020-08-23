import React, { useState } from 'react'
import 'App.css'
import Weather from 'components/Weather'

const api = {
  key: "92b66e5f6cc2d941270dcae9fc4fb927",
  base: "https://api.openweathermap.org/data/2.5/"
}

const errorInfo = {
  name: 'Matrix',
  sys: {
    country: 'ReactJS'
  },
  main: {
    temp: '0'
  },
  weather: [
    {main: 'Yet to Know'}
  ]
}

const App = () => {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if (e.key === "Enter") {
       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result)
            setQuery('')
            console.log(result)
          })
        .catch(error => {
          console.error(error)
        })
    }
  }

   const dateBuilder = (d) => {
     let months = ["January", "February", "March", "April", "May",
          "June", "July", "August", "September", "October", "November", "Decenber"]

     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

     let day = days[d.getDay()]
     let date = d.getDate()
     let month = months[d.getMonth()]
     let year = d.getFullYear()

     return `${day} ${date} ${month} ${year}`
   }

  return (
    <div className={ typeof weather.main !== 'undefined' ? (
      (weather.weather[0].main === 'Clouds') ? 'app cold' 
         : ( weather.weather[0].main === 'Clear') ? 'app clear'
           : (weather.weather[0].main === 'Rain') ? 'app rain'
             : (weather.weather[0].main === 'Haze') ? 'app haze' 
                : 'app warm'
      ) 
        : (weather.cod === '404') ? 'app error'
            : 'app' } >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} 
          />
        </div>
        {(typeof weather.main !== "undefined") ? (
            <Weather 
              weather={weather}
              dateBuilder={dateBuilder}
            />
        ) : <Weather
              weather={errorInfo}
              dateBuilder={dateBuilder}
            />  }
      </main>
    </div>
  )
}

export default App
