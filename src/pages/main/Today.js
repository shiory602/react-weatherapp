import React from 'react';
import { useWeatherContext } from '../../context/Context';
import styled from 'styled-components';

function Today() {
    const { currentWeather } = useWeatherContext();
    
    return (
        <Outline>
            {currentWeather.length !== 0 && (
                <>
                <Text><img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} width="100"/></Text>
                <MaxMin>
                    <Max>{currentWeather.main.temp_max.toFixed(0)}℃</Max>
                    /
                    <Min>{currentWeather.main.temp_min.toFixed(0)}℃</Min>
                </MaxMin>
                <Text>{currentWeather.main.temp.toFixed(0)}℃</Text>
                </>
            )}
            
        </Outline>
    )
}

export default Today;

const Outline = styled.div`
    width: 240px;
    height: 240px;
    background-color: rgba(250, 250, 250, .4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

`
const MaxMin = styled.h3`
    font-size: 36px;
    margin: 0;
`

const Max = styled.span`
    color: tomato;
`
const Min = styled.span`
    color: teal;
`

const Text = styled.h3`
    font-size: 54px;
    color: whitesmoke;
    margin: 0;
`