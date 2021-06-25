import React, { useState, useEffect, createContext, useContext } from "react";

const WeatherContext = createContext();

let lon = '-123.1193';
let lat = '49.2497';
let dt ='1623554321';

const WeatherContextProvider = ({ children }) => {
    // Initialize state
    const [currentWeather, setCurrentWeather] = useState([]);
    const [oneCall, setOneCall] = useState([]);

    const[city, setCity] = useState('Vancouver');

    function changeCity(lond, latd, dtd) {
        lon = lond;
        lat = latd;
        dt = dtd;
    }

    // Fetch data
    /*--------------------------------------
    Weather API reference:
    https://openweathermap.org/api/one-call-api
    ---------------------------------------*/
    const api = {
        // key: "aae34dd3fa439d5cb44c308cae049f36", // Taichi
        key: "c05165900889e0c017b2ee9ad3a1a515",
        baseurl: "https://api.openweathermap.org/data/2.5/"
    }
    useEffect(() => {
        fetch(`${api.baseurl}weather?q=${city}&units=metric&appid=${api.key}`)
        // fetch("weather.json")
        .then(res => res.json())
        .then(data => setCurrentWeather(data))
        .catch(error => console.log(`error ${error}`))

    }, [city])
    
    useEffect(() => {
        if (currentWeather.length !== 0) {
            changeCity(currentWeather.coord.lon, currentWeather.coord.lat, currentWeather.dt)
            
            fetch(`${api.baseurl}onecall?lat=${lat}&lon=${lon}&date=${dt}&exclude=current&units=metric&appid=${api.key}`)
            // fetch("oneCall.json")
            .then(res => res.json())
            .then(data => setOneCall(data))
            .catch(error => console.log(`error ${error}`))
        }
    }, [currentWeather])

    return (
        <WeatherContext.Provider value={{ currentWeather, oneCall, city, setCity }}>
            {children}
        </WeatherContext.Provider>
    );
}

function useWeatherContext() {
    useContext(WeatherContext);
} 

export { useWeatherContext, WeatherContextProvider as default };