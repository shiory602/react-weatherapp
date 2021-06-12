import React from 'react';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Forecast = () => {
    return (
        <>
            <h1>forecast</h1>
            <Collapse defaultActiveKey={['1']} >
                <Panel header="More Detail" key="1">
                <p>{text}</p>
                </Panel>
        </Collapse>
        </>
    )
}

export default Forecast;