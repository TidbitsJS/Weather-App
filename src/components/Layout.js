import React from 'react'
import defaults from 'icons/defaults.png'
import Rain from 'icons/rain.png'
import Clear from 'icons/clear.png'
import Cloud from 'icons/cloud.png'
import Cold from 'icons/cold.png'
import Haze from 'icons/haze.png'
import Warm from 'icons/warm.png'

const Layout = ({ iconName }) => {
    var url = defaults
    console.log(iconName)

    if(iconName === 'Clear') {
        url = Clear
    } else if (iconName === 'Clouds') {
        url = Cloud
    } else if (iconName === 'Rain') {
        url = Rain
    } else if (iconName === 'Haze') {
        url = Haze
    } else if (iconName === 'Warm') {
        url = Warm
    } else if (iconName === 'Mist' || iconName === 'Smoke'){
        url = Cold
    } else {
        url = defaults
    }
    
    return (
        <div className="icon">
            <img src={url} alt="icon" />
        </div>
    )
}

export default Layout
