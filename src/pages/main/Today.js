import React from 'react';
import { Context } from '../../context/Context';

function Today(props) {
    return (
        <Context.Consumer>
            {(weather) => {
                console.log(weather)
                let icon = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
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
            }}
            
        </Context.Consumer>
    )
}

export default Today;