import React from 'react';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';

function Hourly() {
    return (
        <>
            <h1>hourly</h1>
            <div className="site-card-wrapper">
                <Row gutter={16}>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                <Col span={6}>
                    <Card title="Card title" bordered={false}>
                    Card content
                    </Card>
                </Col>
                </Row>
            </div>
        </>
    )
}

export default Hourly;