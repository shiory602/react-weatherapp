import React, { useState, useEffect } from "react";

const Context = React.createContext();

function WeatherContext() {
// Initialize state
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const[city, setCity] = useState('Vancouver');

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
        .then(data => setData(data))
        .catch(error => console.log(`error ${error}`))
    })
    
    return (
        <WeatherContext.Provider value={{ data, isLoading, changeCity }}>
            {this.children}
        </WeatherContext.Provider>
    );
}

export default Context;