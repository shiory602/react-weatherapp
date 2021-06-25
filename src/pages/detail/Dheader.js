import React from 'react';
import { useWeatherContext } from '../../context/Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Row, Col, Space } from 'antd';

const Dheader = () => {
    const { currentWeather } = useWeatherContext();
    
    var date = new Date();
        var datestr = date.toLocaleDateString('en-US', {
            weekday: "long",
            day: '2-digit',
            month: 'long',
            year: 'numeric',
            // timeZone: currentWeather.timezone, // set timezone
        })

        // getting time
        var timestr = date.toLocaleString("en-US", {
            timeStyle: "short", // 12:00
            hourCycle: "h24",
            // timeZone: currentWeather.timezone,
        })
        
    return (
        <>
            <Head>
                <Col span={16}>
                <Space direction="vertical">
                <Place>{currentWeather.length !== 0 && currentWeather.name}</Place>
                <Time>{datestr}</Time>
                <Time>{timestr}</Time>
                </Space>
                </Col>
                <Item span={6}>
                    <Btn  to='/'>
                        -
                    </Btn>
                </Item>
            </Head>
        </>
    )
}

export default Dheader;

const Head = styled(Row)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Item = styled(Col)`
    margin-top: 20px;
`

const Place = styled.p`
    margin: 0;
    font-size: 54px;
    font-weight: 800;
    color: whitesmoke;
    `

const Time = styled.p`
    margin: 0;
    font-size: 48px;
    color: whitesmoke;
`

const Btn = styled(Link)`
    margin-left: 70px;
    padding:0 15px 3px;
    color: #fff;
    font-size: 2rem;
    background-color: rgba(250, 250, 250, .4);
    border-radius: 50%
`