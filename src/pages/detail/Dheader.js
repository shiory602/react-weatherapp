import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Row, Col, Space } from 'antd';


const Dheader = () => {
    return (
        <>
            <Head>
                <Col span={16}>
                <Space direction="vertical">
                    <Place>Vancouver</Place>
                    <Time>10:12 AM</Time>
                </Space>
                </Col>
                <Item span={8}>
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
    height: 100px;
    padding-top: 15px;
    text-align: center;
`

const Item = styled(Col)`
    margin-top: 20px;
`

const Place = styled.p`
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    `

const Time = styled.p`
    margin: 0;
    font-size: 2rem;
`

const Btn = styled(Link)`
    padding: 0 10px;
    color: #fff;
    font-size: 2rem;
`