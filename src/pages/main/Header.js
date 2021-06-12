import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Row, Col, Input, Space } from 'antd';

const Header = () => {

    const { Search } = Input;

    const onSearch = value => console.log(value);

    return (
        <>
            <Head>
                <Item span={8}>
                    <Search placeholder="Search for a city..." allowClear onSearch={onSearch} style={{ width: 200 }} />
                </Item>
                <Col span={8}>
                <Space direction="vertical">
                    <Place>Vancouver</Place>
                    <Time>10:12 AM</Time>
                </Space>
                </Col>
                <Item span={8}>
                    <Btn to='/Detail'>
                        +
                    </Btn>
                </Item>
            </Head>
        </>
    )
}

export default Header;


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