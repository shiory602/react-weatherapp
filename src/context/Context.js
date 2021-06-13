import React, { useState, useEffect } from "react";

const Context = React.createContext();

function WeatherContext() {
// Initialize state
    const [currentWeater, setCurrentWeather] = useState([]);
    const [oneCall, setOneCall] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const[city, setCity] = useState('Vancouver');
    const[lat, setLat] = useState('');
    const[lon, setLon] = useState('');
    const[dt, setDt] = useState('');

    function changeCity(cityName) {
        setCity(cityName)
    }

// Fetch data
    useEffect(() => {
        /*--------------------------------------
        Weather API reference:
        https://openweathermap.org/api/one-call-api
        ---------------------------------------*/
        const api = {
            key: "c05165900889e0c017b2ee9ad3a1a515",
            baseurl: "https://api.openweathermap.org/data/2.5/"
        }
        setIsLoading(true);
    
        fetch(`${api.baseurl}weather?q=${city}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(data => setCurrentWeather(data))
        .catch(error => console.log(`error ${error}`))

        // fetch(`${api.baseurl}onecall?lat=${lat}&lon=${lon}&date=${dt}&exclude=current&units=metric&appid=${api.key}`)
        // .then(res => res.json())
        // .then(data => setOneCall(data))
        // .catch(error => console.log(`error ${error}`))
    })
    
    return (
        <WeatherContext.Provider value={{ currentWeater, oneCall, isLoading, changeCity }}>
            {this.children}
        </WeatherContext.Provider>
    );
}

export default Context;