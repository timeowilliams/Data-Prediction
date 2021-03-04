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
             countries: data,
             country:''
              })
            }
          );
      };

      handleInput = event => {
        this.setState({...this.state, country: event.target.value });
      };
    
      logValue = () => {
        console.log(this.state.country);
      };


      render() {
        if(this.state.countries){
        console.log('Countries are this obj', typeof this.state.countries)
       console.log('Countries are', this.state.countries)
        }
  
        return (
          <div id = "feed" >
           <h4>{this.state.country}</h4> 
            <div id = "button"> 
                <input onChange={this.handleInput} placeholder="Enter country" />
                <button onClick={this.logValue}>Search</button>
            </div>
          </div>
        );
      }
    }

   