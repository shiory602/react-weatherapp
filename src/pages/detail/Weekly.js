import React from 'react';

// Weekly date function for bottom-section -----------------------------------
function dateBuilder(d) {
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let day = days[d.getDay()]; // array[index]
	return `${day}`;
}

function Weekly() {
    return (
        <>
            <h1>weekly</h1>
            <div className="weekly fadein">
                <div className="week-day">
                <div className="day1"></div>
                <div id="weekly-icon1"></div>
                <div className="day-weather1"></div> 
                </div>
                <div className="week-day">
                <div className="day2"></div>
                <div id="weekly-icon2"></div>
                <div className="day-weather2"></div>
                </div>
                <div className="week-day">
                <div className="day3"></div>
                <div id="weekly-icon3"></div>
                <div className="day-weather3"></div>
                </div>
                <div className="week-day">
                <div className="day4"></div>
                <div id="weekly-icon4"></div>
                <div className="day-weather4"></div>
                </div>
                <div className="week-day">
                <div className="day5"></div>
                <div id="weekly-icon5"></div>
                <div className="day-weather5"></div>
                </div>
                <div className="week-day">
                <div className="day6"></div>
                <div id="weekly-icon6"></div>
                <div className="day-weather6"></div>
                </div>
            </div>
        </>
    )
}

export default Weekly;