import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Feed from './Feed.js';
const path = require("path");


const countriesUrl = 'https://restcountries.eu/rest/v2/all';
class HelloWorld extends Component {
    render() {
        return (
            <div>
            <h1>
                 How would you like some city data?
            </h1>
                <Feed  feedUrl = {countriesUrl} />
            </div>

        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));