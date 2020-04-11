import React, { Component } from 'react';
import { FaSun, FaCloud, FaCloudRain, FaCloudSun, FaSnowflake } from 'react-icons/fa';
import './FetchCurrentWeather.css';
import Clock from 'react-live-clock';

export default class FetchCurrentWeather extends Component {

    state = {
        fetchCoordinates: '55.679670,12.545873',
        currentLocation: undefined,
        currentOverview: undefined,
        currentTemp: undefined,
        currentWind: undefined,
        icon: undefined,
        loading: true,
        styles: undefined,
        hourly: undefined,
        daily: undefined
    }

    componentDidMount() {
        this.fetchNewData();
    }

    handleWeatherData (cond, hourly, daily) {
        this.props.handleWeatherData(cond, hourly, daily);
    }

    async fetchNewData() {
        await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e9e67e754b52ca8cfc1cde047026daf7/${this.state.fetchCoordinates}?units=si`)
            .then(response => response.json())
            .then(response => {

                const tempRounded = Math.floor(response.currently.temperature);
                const windRounded = Math.floor(response.currently.windSpeed);

                const weatherIconAndStyles = () => {
                    const weatCondition = response.currently.icon;
                        if (weatCondition === 'cloudy') {
                            this.setState({styles: 'current-weather-wrapper overcast'});
                            return <FaCloud />
                        } else if (weatCondition === 'rain') {
                            this.setState({styles: 'current-weather-wrapper rain'});
                            return <FaCloudRain />
                        } else if (weatCondition === 'partly-cloudy-day') {
                            this.setState({styles: 'current-weather-wrapper partly-cloudy-day'});
                            return <FaCloudSun />
                        } else if (weatCondition === 'snow') {
                            this.setState({styles: 'current-weather-wrapper snow'});
                            return <FaSnowflake />
                        } else {
                            this.setState({styles: 'current-weather-wrapper sun'});
                            return <FaSun />
                        }
                }

    // Set state to hourly and weekly that will later be passed on to Panel
    // and then pass to the child components OverviewWeekly and OverviewDaily of Panel
                this.setState({ hourly: response.hourly });
                this.setState({ daily: response.daily });
                // console.log(response);

    // Set the defined values in this component's states and set loading to false
                this.setState({ currentLocation: response.timezone,
                                currentOverview: response.currently.summary,
                                currentTemp: tempRounded,
                                currentWind: windRounded,
                                icon: weatherIconAndStyles(),
                                loading: false
                            })
                            console.log(response);
            });

    // Pass data regarding corrent weather to method that pass to parent component 
                this.handleWeatherData(this.state.styles, this.state.hourly, this.state.daily);
                this.setState({loading: false});
    };
    
    render() {

        const { currentLocation, currentOverview, currentTemp, currentWind, icon, styles } = this.state;

        return (
            <div className={styles}>
                <div>
                    <p>The weather right now</p>
                    <p><b><Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Copenhagen'} /></b></p>
                    <div className="current-weather-container">
                        <div className="temperature">
                            <h2>{ currentTemp+'°' }</h2>
                            <p>{ currentWind } m/s</p>
                        </div>
                        <div className="location">
                            <div className="change-city">
                                <select className="city-select" onChange={ (e) => this.setState({fetchCoordinates: e.target.value}) }>
                                    <option value="55.679670,12.545873" selected>Copenhagen, Denmark</option>
                                    <option value="51.503525,-0.122228">London, UK</option>
                                    <option value="48.857131,2.350180">Paris, France</option>
                                    <option value="41.946870,12.494075">Rome, Italy</option>
                                    <option value="40.623056,-3.925954">Madrid, Spain</option>
                                    <option value="65.980651,29.198062">Helsinki, Finland</option>
                                    <option value="33.455134,-112.077027">Phoenix, Arizona, USA</option>
                                    <option value="64.837059,-147.713640">Anchorage, Alaska, USA</option>
                                </select>
                                <button className="change-city-btn" onClick={ () => this.fetchNewData() }>Change city</button>
                            </div>
                            <h3>{ currentLocation }</h3>
                        </div>
                        <div className="weather-symbol">
                            <div>
                                <h3>{ icon }</h3>
                                <p>{ currentOverview }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}