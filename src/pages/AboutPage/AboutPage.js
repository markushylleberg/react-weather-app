import React, { Component } from 'react';
import './AboutPage.css';

export default class AboutPage extends Component {
    render() {
        return (
            <div className="about-wrapper">
                <div className="about-container">
                    <div className="about-headlines">
                        <h2>About</h2>
                    </div>
                <p>This project has been developed by Markus Hylleberg, who is a student on KEA.</p>
                <br />
                <br />
                <h4>The assignment</h4>
                <p>The assignment was to research API's that provide data regarding the weather and use the data to develop a panel overviewing the weather.</p>
                <br />
                <br />
                <h4>Learning goals</h4>
                <p>This assignment was a part of the React elective course on KEA on the spring semester of 2020. At this point of the course we are learning the fundamentals of React. So this project has focused on passing data to different components using props, as well as fetching data and using packages. </p>
                <br />
                <br />
                <h4>Packages</h4>
                <p>A part of this assignment were also to use packages. Below is a list of the packages used for this project</p>
                <br />
                <p>react-router-dom</p>
                <br />
                <p>react-moment</p>
                <br />
                <p>react-spinners</p>
                <br />
                <p>react-live-clock</p>
                <br />
                <p>react-icons</p>
                </div>
            </div>
        );
    }
} 