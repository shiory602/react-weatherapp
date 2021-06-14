import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
    font-size: 64px;
    color: whitesmoke;
`

const Btn = styled(Link)`
    padding: 0 10px;
    color: #fff;
    font-size: 2rem;
`