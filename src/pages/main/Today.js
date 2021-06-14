import React from 'react';
import { useWeatherContext } from '../../context/Context';

function Today() {
    const { weathers } = useWeatherContext();
    console.log(weathers)
    let icon = `http://openweathermap.org/img/w/${weathers.weather[0].icon}.png`;
    return (
        <>
            <img src={icon} width="100"/>
            <h3>
                34°
                <span>/</span>
                27°
            </h3>
            <h1>30°</h1>
        </>
    )
}

export default Today;