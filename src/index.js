import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed.js';
const path = require("path");


const countriesUrl = 'https://restcountries.eu/rest/v2/name/';
class HelloWorld extends Component {
    render() {
        return (
            <div>
            <h1>
                 You are: 
            </h1>
                <Feed  feedUrl = {countriesUrl} />
            </div>

        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));