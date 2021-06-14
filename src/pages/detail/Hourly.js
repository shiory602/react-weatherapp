import React from 'react';
import styled from 'styled-components';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';

function Hourly() {
    return (
        <>
            <Text>Hourly</Text>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={8}>12:00</Detail>
                                <Detail span={8}>⛅️</Detail>
                                <Detail span={8}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={8}>12:00</Detail>
                                <Detail span={8}>⛅️</Detail>
                                <Detail span={8}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={8}>12:00</Detail>
                                <Detail span={8}>⛅️</Detail>
                                <Detail span={8}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={8}>12:00</Detail>
                                <Detail span={8}>⛅️</Detail>
                                <Detail span={8}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={8}>12:00</Detail>
                                <Detail span={8}>⛅️</Detail>
                                <Detail span={8}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card bordered={false}>
                            <Layout>
                                <Detail span={8}>12:00</Detail>
                                <Detail span={8}>⛅️</Detail>
                                <Detail span={8}>27°</Detail>
                            </Layout>
                        </Card>
                    </Col>
                </Row>
            </div>
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