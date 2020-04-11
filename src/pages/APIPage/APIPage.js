import React, { Component } from 'react';
import './APIPage.css';

export default class APIPage extends Component {
    render() {
        return (
            <div className="api-wrapper">
                <div className="api-container">
                    <div className="api-headlines">
                        <h2>The API</h2>
                        <h3>from Dark Sky</h3>
                    </div>
                    <p>This project has been developed by Markus Hylleberg, who is a student on KEA.</p>
                <br />
                <br />
                <h4>Fetching from Dark Sky and CORS</h4>
                <p>I researched many different Weather API's and when I came across the Dark Sky Weather API I figured I would research further on that API. It turned out to be a heavily supported API with a lot of possitive feedback as well as a lovely dashboard on their website where you can easily see the token and how many times the API with your token has been fetched. I did struggle quite a bit with a CORS error that took me a lot of time to figure out, especially because there is very little support online on how to solve the CORS error on the Dark Sky API.</p>
                <br />
                <br />
                <h4 style={{color: "green"}}>Pros using Dark Sky API</h4>
                <p>The experience working with the Dark Sky API has been very positive. The structure of the data you fetch is very simple. The data is sorted into three categories 'current weather', 'short term' and 'long term' and it makes it very easy to work with. The API contains very much data in general which has been left out of the project for simplicity.</p>
                <br />
                <br />
                <h4 style={{color: "red"}}>Cons using Dark Sky API</h4>
                <p>There aren't very many cons using the Dark Sky API, other than I have at times noticed that it isn't as precise as other weather websites like DMI.dk or YR.no. I would say it is accurate 95% of the time, and then rarely on the last 5% it is just completely wrong.</p>
                <br />
                <p>Also in the long term weather (showing the weather for 7 or 8 days ahead) the Dark Sky API concludes "rain" for the entire day if there is as much as 0.0001 ml rain at 4AM. and complete sunshine the rest of the day </p>
                </div>
            </div>
        );
    }
}