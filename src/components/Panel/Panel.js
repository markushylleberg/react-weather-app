import React, { Component } from 'react';
import FetchCurrentWeather from '../FetchCurrentWeather/FetchCurrentWeather';
import OverviewDaily from '../OverviewDaily/OverviewDaily';
import OverViewWeekly from '../OverviewWeekly/OverviewWeekly';
import ClipLoader from "react-spinners/ClipLoader";
import './Panel.css';

export default class Dashboard extends Component {

    state = {
        currentWeather: undefined,
        hourlyData: undefined,
        dailyData: undefined,
        loading: true
    }

    handleWeatherData = (cond, hourly, weekly) => {
        this.setState({currentWeather: cond});
        this.setState({hourlyData: hourly});
        this.setState({dailyData: weekly, loading: false});

    // Pass it on to App.js
        this.handleWeatherDataFromDashBoard(this.state.currentWeather);
    }

    handleWeatherDataFromDashBoard (cond, hourly, weekly) {
        this.props.handleWeatherDataFromDashBoard(cond, hourly, weekly);
    }

    render() {

        const { hourlyData, dailyData, loading } = this.state;

        const hidden = loading ? { display: 'none' } : { display: 'block' };

        return (
            <div className="dashboard-wrapper">
            <ClipLoader size={150} color={"#6d6d6d"} loading={this.state.loading} />
                    <div className="dashboard-container" style={ hidden }>
                        <FetchCurrentWeather handleWeatherData={this.handleWeatherData} />
                        <OverviewDaily {...hourlyData}  />
                        <OverViewWeekly {...dailyData}/>
                    </div>
            </div>
        );
    }
}