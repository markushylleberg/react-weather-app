import React, { Component } from 'react';
import Moment from 'react-moment';
import { FaCloud, FaSun, FaCloudRain, FaWater, FaCloudSun, FaCloudMoon, FaMoon, FaSnowflake } from 'react-icons/fa';
import './OverviewDaily.css';

export default class OverviewDaily extends Component {

    state = {
        hourlyData: undefined,
        loading: true
    }

    componentWillReceiveProps(props) {
            this.setState({ loading: false })

            if ( this.state.loading === false ){
                const arrOfHourData = props.data;
                let weatherIcon;
                this.setState({hourlyData: arrOfHourData.map(function (hour, index) {

                        const unixTimestamp = hour.time;
                        const floorTemperature = Math.floor(hour.temperature);
                        const floorWindSpeed = Math.floor(hour.windSpeed);

                        if (hour.icon === 'cloudy'){
                            weatherIcon = <FaCloud color="gray" />;
                        } else if (hour.icon === 'rain'){
                            weatherIcon = <FaCloudRain color="gray" />;
                        } else if (hour.icon === 'fog'){
                            weatherIcon = <FaWater color="gray" />;
                        } else if (hour.icon === 'partly-cloudy-day'){
                            weatherIcon = <FaCloudSun color="gray" />;
                        } else if (hour.icon === 'partly-cloudy-night'){
                            weatherIcon = <FaCloudMoon color="gray" />;
                        } else if (hour.icon === 'clear-night'){
                            weatherIcon = <FaMoon color="gray" />;
                        } else if (hour.icon === 'snow') {
                            weatherIcon = <FaSnowflake color="gray" />;
                        } else {
                            weatherIcon = <FaSun color="gray" />;
                        }

                        return (<div className="hourly-entry" key={index}>
                                    <p className="hourly-entry-day"><Moment tz="Europe/Copenhagen" format="dddd" unix>{unixTimestamp}</Moment></p>
                                    <p className="hourly-entry-time"><Moment format="HH:mm" unix>{unixTimestamp}</Moment></p>
                                    <div className="hourly-entry-icon">{ weatherIcon }</div>
                                    <p className="hourly-entry-temperature">{floorTemperature}°</p>
                                    <p className="hourly-entry-windspeed">{floorWindSpeed} m/s</p>
                                </div>)
                })
            })
            }
        }
    
    render() {
        return (
            <div className="hourly-wrapper">
                <div className="hourly-headlines">
                    <h2>Short term weather</h2>
                    <h3>{ this.props.summary }</h3>
                </div>
                <div className="hourly-container">{ this.state.hourlyData }</div>
            </div>
        );
    }
}