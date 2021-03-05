import { promised } from 'q';
import React, { Component } from 'react';
import './style.css'
const path = require("path");
export default class Feed extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        showCountryDiv: false,
        showNationalityDiv: false,
        country: '',
        countryName: ''
      };
    }

      handleInput = event => {
        this.setState({...this.state, countryName: event.target.value });
      };

      handleNameInput = event => {
        this.setState({...this.state, name: event.target.value });
      };
    
    



      render() {

    //    const countryValue = (props) => {
    //         console.log(this.state.countryName);//India
    //         console.log(typeof (this.props.feedUrl + this.state.countryName + '?fullText=true'))//string
    //         console.log(this.props.feedUrl + this.state.countryName);
            
    //         fetch(this.props.feedUrl+ this.state.countryName+ '?fullText=true')
    //         .then(data => data.json())
    //         .then(
    //             countryInfo => {
    //                 console.log('This country obj is', countryInfo);
    //               this.setState({
    //             ...this.state,
    //              country: countryInfo,
    //              showCountryDiv: true
    //               })
    //             }
    //           )
              
    //       };


          const nationalityValue = (props) => {
  
            
            console.log(this.state.name);

        const fetches = [
            //Fetch for nationality
            fetch('https://api.nationalize.io/?name='+ this.state.name)
            .then(data => data.json())
            .then(
                countryInfo => {
                    console.log('This nationality obj is', countryInfo);
                  this.setState({
                ...this.state,
                 nationality: countryInfo,
                 
                  })
                }
              ),
                 //Fetch for age
                 //Fetch for gender
              fetch('https://api.genderize.io/?name='+ this.state.name)
              .then(data => data.json())
              .then(
                  genderInfo => {
                      console.log('This gender obj is', genderInfo);
                    this.setState({
                  ...this.state,
                   gender: genderInfo,
                   
                    })
                  },
                ),
                //Fetch for age
                fetch('https://api.agify.io/?name='+ this.state.name)
                .then(data => data.json())
                .then(
                    ageInfo => {
                        console.log('This age obj is', ageInfo);
                      this.setState({
                    ...this.state,
                     age: ageInfo,
                     
                      })
                    }
                  )
                ];
            Promise.all(fetches).then((data)=>{
                console.log('Promises done');
                console.log('State is', this.state);
                console.log('The gender is', this.state.gender.gender)
                console.log('The age is', this.state.age.age)
                this.setState({
                    ...this.state,
                    showNationalityDiv : true
                })
            });
            };







        const {showNationalityDiv} = this.state;
        // const showDiv = this.state.showDiv;
        // {this.state.country[0].flag}
  
        return (
          <div id = "feed" >
            {/* <div id = "countryButton"> 
                <input onChange={this.handleInput} placeholder="Enter your favorite country" />
                
                <button onClick={countryValue}>Search</button>
                { showCountryDiv 
                    ? <div>
                        <p>You've selected {this.state.countryName}. This country has 
                        the following flag: <img id = 'flag' src = {this.state.country[0].flag}/></p>
                    </div>
                    : null
                }
                </div> */}
                <div id = "nationalityButton"> 
                <input onChange={this.handleNameInput} placeholder="Enter name"/>

                <button onClick={nationalityValue}>Search</button>
                { showNationalityDiv 
                    ? <div id="nationalityText">
                        <p>Our nationality guess is {this.state.nationality.country[0].country_id} </p>
                        <p>Gender is {this.state.gender.gender}</p>
                        <p>Age is {this.state.age.age}</p>
                    </div>
                    : null
                }
         
        
            </div>
          </div>
        );
      }
    }

