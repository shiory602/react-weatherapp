import React from 'react';
// import { useWeatherContext } from '../../context/Context';
import styled from 'styled-components';

function Today() {
    // const { weathers } = useWeatherContext();
    // console.log(weathers)
    // let icon = `http://openweathermap.org/img/w/${weathers.weather[0].icon}.png`;
    return (
        <Outline>
            {/* <img src={icon} width="100"/> */}
            <Text>🌤</Text>
            <MaxMin>
                <Max>34°</Max>
                /
                <Min>27°</Min>
            </MaxMin>
            <Text>30°</Text>
        </Outline>
    )
}

export default Today;

const Outline = styled.div`
    width: 300px;
    height: 300px;
    background-color: rgba(250, 250, 250, .4);
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