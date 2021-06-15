import React from 'react';
import { useWeatherContext } from '../../context/Context';
import styled from 'styled-components';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Collapse, Divider } from 'antd';

const { Panel } = Collapse;

const text = `
    Vancouver, Canada / 
    🌤 Partly Cloudy / 
    Temperature: 29 ℃ / 
    Wind: 6.1 kmph / 
    Precip: 0.00 mm / 
    Pressure: 1025.0 mb
`;

const Forecast = () => {
    // const { currentWeather } = useWeatherContext();
    return (
        <Layout>
            <Divider orientation="left"><Text>Forecast</Text></Divider>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="More Detail" key="1">
                <Detail>{text}</Detail>
                </Panel>
            </Collapse>
        </Layout>
    )
}

export default Forecast;

const Layout = styled.div`
    padding-bottom: 50px;
`


const Text = styled.h3`
    font-size: 36px;
    line-height: 100px;
    color: whitesmoke;
    margin: 0;
`

const Detail = styled.p`
    margin: 0;
    font-size: 24px;
    color: gray;
`