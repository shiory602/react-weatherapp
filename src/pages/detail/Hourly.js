import React from 'react';
import { useWeatherContext } from '../../context/Context';
import styled from 'styled-components';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Card, Col, Row, Divider } from 'antd';

function Hourly() {
    const { oneCall } = useWeatherContext();
    return (
        <>
        {oneCall.length !== 0 && (
        <>
            <Divider orientation="left"><Text>Hourly</Text></Divider>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={15}>{oneCall}</Detail>
                                <Detail span={10}>⛅️</Detail>
                                <Detail span={10}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={15}>13:00</Detail>
                                <Detail span={10}>⛅️</Detail>
                                <Detail span={10}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={15}>14:00</Detail>
                                <Detail span={10}>⛅️</Detail>
                                <Detail span={10}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={15}>15:00</Detail>
                                <Detail span={10}>⛅️</Detail>
                                <Detail span={10}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={15}>16:00</Detail>
                                <Detail span={10}>⛅️</Detail>
                                <Detail span={10}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={15}>17:00</Detail>
                                <Detail span={10}>⛅️</Detail>
                                <Detail span={10}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
        )}
        </>
    )
}

export default Hourly;


const Text = styled.h3`
    font-size: 36px;
    line-height: 100px;
    color: whitesmoke;
    margin: 0;
`

const Layout = styled(Row)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Detail = styled(Col)`
    margin: 0;
    font-size: 24px;
    color: gray;
`