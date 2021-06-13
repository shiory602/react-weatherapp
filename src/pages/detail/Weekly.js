import React from 'react';
/*---------------
| Ant design     |
----------------*/
import 'antd/dist/antd.css';
import { Card } from 'antd';

// Weekly date function for bottom-section -----------------------------------
// function dateBuilder(d) {
// 	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// 	let day = days[d.getDay()]; // array[index]
// 	return `${day}`;
// }

function Weekly() {
    return (
        <>
            <h1>weekly</h1>
            <Card type="inner" title="Monday">
            Monday
            </Card>
            <Card
            style={{ marginTop: 16 }}
            type="inner"
            title="Tuesday"
            >
            Tuesday
            </Card>
        </>
    )
}

export default Weekly;