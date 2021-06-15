import React from 'react';
import { useWeatherContext } from '../../context/Context';
import styled from 'styled-components';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Row, Col, Card, Divider } from 'antd';

// Weekly date function for bottom-section -----------------------------------
// function dateBuilder(d) {
// 	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// 	let day = days[d.getDay()]; // array[index]
// 	return `${day}`;
// }

function Weekly() {
    // const { currentWeather } = useWeatherContext();
    return (
        <>
            <Divider orientation="left"><Text>Weekly</Text></Divider>
            <Card type="inner">
                <Layout>
                    <Detail span={8}>Monday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            >
                <Layout>
                    <Detail span={8}>Tuesday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            >
                <Layout>
                    <Detail span={8}>Wednesday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            >
                <Layout>
                    <Detail span={8}>Thursday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            >
                <Layout>
                    <Detail span={8}>Friday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            >
                <Layout>
                    <Detail span={8}>Saturday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            >
                <Layout>
                    <Detail span={8}>Sunday</Detail>
                    <Detail span={8}>⛅️</Detail>
                    <Detail span={8}>
                        <span>34°</span>
                        /
                        <span>27°</span>
                    </Detail>
                </Layout>
            </Card>
        </>
    )
}

export default Weekly;

const Layout = styled(Row)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Text = styled.h3`
    font-size: 36px;
    line-height: 100px;
    color: whitesmoke;
    margin: 0;
`

const Detail = styled(Col)`
    margin: 0;
    font-size: 24px;
    color: gray;
`