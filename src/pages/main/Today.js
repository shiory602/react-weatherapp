import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

function Today() {
    return (
        <>
            <h1>today</h1>
        <SearchOutlined />
            <main className="fadein">
                <section className="current">
                    <div className="date"></div> 
                    <div className="temp"></div> 
                    <div className="wd weather1"></div> 
                    <div className="wd weather2"></div>
                    <div className="wd weather3"></div>
                </section>
                <section className="location">
                    <div className="city"></div>
                    <div className="country"></div>
                </section>

                <div className="today fadein">
                    <div id="weatherIcon"></div>
                    <div className="tem">
                    <p>TODAY</p>
                    <div className="todays-weather" id="todays-weather"></div>
                    <div className="high-low">
                        <span className="high"></span>/
                        <span className="low"></span>℃</div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Today;