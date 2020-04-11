import React, { Component } from 'react';
import Dashboard from './components/Panel/Panel';
import AboutPage from './pages/AboutPage/AboutPage';
import APIPage from './pages/APIPage/APIPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    currentWeather: undefined,
    loading: true,
    styles: 'App'
  }

  handleWeatherDataFromDashBoard = cond => {

    if (cond.includes('overcast')) {
        this.setState({styles: 'App cloudy-background'});
    } else if (cond.includes('rain')) {
        this.setState({styles: 'App rainy-background'});
    } else if (cond.includes('partly-cloudy-day')) {
        this.setState({styles: 'App partly-cloudy-background'});
    } else if (cond.includes('snow')) {
        this.setState({styles: 'App snowy-background'});
    } else {
        this.setState({styles: 'App sunny-background'});
    }

    this.setState({currentWeather: cond, loading: false});
    // console.log('from App.js : '+cond)
  }

  render() {

    const { styles } = this.state;

    return (
      <Router>
        <div className={styles}>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/api">API</Link>
                  </li>
                </ul>
              </nav>
              <Switch>

                <Route exact path="/">
                  <Dashboard handleWeatherDataFromDashBoard={this.handleWeatherDataFromDashBoard} />
                </Route>

                <Route exact path="/about">
                  <AboutPage />
                </Route>

                <Route exact path="/api">
                  <APIPage />
                </Route>

              </Switch>
        </div>
      </Router>
    )
  }
}

export default App;