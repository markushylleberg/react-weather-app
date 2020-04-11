import React, { Component } from 'react';
import Moment from 'react-moment';
import { FaCloud, FaSun, FaCloudRain, FaWater, FaCloudSun, FaCloudMoon, FaMoon, FaSnowflake } from 'react-icons/fa';
import './OverviewWeekly.css';

export default class OverviewWeekly extends Component {

    state = {
        dailyData: undefined,
        arrIndividualDays: [],
        loading: true
    }

    componentWillReceiveProps(props) {
        this.setState({dailyData: props.data, loading: false});
        if (this.state.dailyData !== undefined) {
            let arrOfDailyData = this.state.dailyData;
            let weatherIcon = undefined;
            let newArr = arrOfDailyData.map( (daily, index) => {

                const unixTimestamp = daily.time;
                const floorTemperature = Math.floor(daily.temperatureHigh);
                const floorWindSpeed = Math.floor(daily.windSpeed);

                if (daily.icon === 'cloudy'){
                    weatherIcon = <FaCloud color="gray" />;
                } else if (daily.icon === 'rain'){
                    weatherIcon = <FaCloudRain color="gray" />;
                } else if (daily.icon === 'fog'){
                    weatherIcon = <FaWater color="gray" />;
                } else if (daily.icon === 'partly-cloudy-day'){
                    weatherIcon = <FaCloudSun color="gray" />;
                } else if (daily.icon === 'partly-cloudy-night'){
                    weatherIcon = <FaCloudMoon color="gray" />;
                } else if (daily.icon === 'clear-night'){
                    weatherIcon = <FaMoon color="gray" />;
                } else if (daily.icon === 'snow'){
                    weatherIcon = <FaSnowflake color="gray" />;
                } else {
                    weatherIcon = <FaSun color="gray" />;
                }

                return <div className="daily-entry" key={index}>
                            <div className="daily-entry-times">
                                <p className="daily-entry-day"><Moment tz="Europe/Copenhagen" format="dddd" unix>{unixTimestamp}</Moment></p>
                                <p className="daily-entry-date"><Moment tz="Europe/Copenhagen" format="D. MMMM" unix>{unixTimestamp}</Moment></p>
                            </div>
                            <div className="daily-entry-icon">{ weatherIcon }</div>
                            <p className="daily-entry-temperature">{floorTemperature}°</p>
                            <p className="daily-entry-windspeed">{floorWindSpeed} m/s</p>
                        </div>
            });
            this.setState({arrIndividualDays: newArr});

        }
    }
    
    render() {

        return (
            <div className="daily-wrapper">
                <div className="daily-headlines">
                    <h2>Long term weather</h2>
                    <h3>{ this.props.summary }</h3>
                </div>
                <div className="daily-container">
                    { this.state.arrIndividualDays.map( function (entry) {
                        return <div>{entry}</div>
                    }) }
                </div>
            </div>
        );
    }
}