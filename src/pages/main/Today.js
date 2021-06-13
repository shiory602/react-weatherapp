import React, { useState } from 'react';

function Today() {
    // const [icon, setIcon] = useState(`http://openweathermap.org/img/w/${props.currentWeather.weather[0].icon}.png`);
    // console.log(icon)
    return (
        <>
            {/* <img src={icon} width="100"/> */}
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