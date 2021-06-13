import React, { useState, useEffect } from "react";

export const Context = React.createContext();

export default function WeatherContext() {

    // Initialize state
    const [currentWeather, setCurrentWeather] = useState([]);
    const [oneCall, setOneCall] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const[city, setCity] = useState('Vancouver');
    const[lon, setLon] = useState('-123.1193');
    const[lat, setLat] = useState('49.2497');
    const[dt, setDt] = useState('1623554321');

    function changeCity(cityName, lon, lat, dt) {
        setCity(cityName);
        setLon(lon);
        setLat(lat);
        setDt(dt);
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

        console.log(currentWeather);
        
        fetch(`${api.baseurl}onecall?lat=${lat}&lon=${lon}&date=${dt}&exclude=current&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(data => setOneCall(data))
        .catch(error => console.log(`error ${error}`))

        console.log(oneCall);

    }, [city])
    
    return (
        <Context.Provider value={{ currentWeater, oneCall, isLoading, changeCity }}>
            {this.children}
        </Context.Provider>
    );
}
