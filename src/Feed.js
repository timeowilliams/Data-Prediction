import React, { Component } from 'react';
const path = require("path");
export default class Feed extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        countries: [],
      };
    }
// Put AJAX in this Component
    componentDidMount() {
        fetch(this.props.feedUrl)
        .then(data => data.json())
          .then(
            data => {
              this.setState({
             countries: data
              })
            }
          );
      };

      render() {
        // put render logic here
        console.log(this.props.feedUrl)//SHould expect URL link
        if(this.state.countries){
        console.log('Countries are this obj', typeof this.state.countries)
       console.log('Countries are', this.state.countries)
        }
  
        return (
          <div id = "feed" >
            {this.props.countries}
          </div>
        );
      }
    }

   