import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';




class App extends Component {

  state={
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: false

  }

  handleInputChange = e => {
     this.setState({
        value : e.target.value
     })
  }

  componentDidUpdate(prevProps, prevState){
    
    if(this.state.value.length === 0)return
    if(prevState.value!==this.state.value)
    {
      //klucz do API
      const APIKey = "6114b41cdfda542af13eb9e016a03215";
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then(response => {
        if(response.ok)
        {
          return response
        }
        throw Error("Nie udało się")
      })
      .then(response => response.json())
      .then(data =>{
        const time = new Date().toLocaleString();
        this.setState({
          err: false,
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          
        })
      })
      .catch(err => {
        console.log(err);
        this.setState(state => ({
            err: true,
            city: this.state.value
          }))
         })
    }
  }

  render(){
    return(
      <div className="App">
        <Form 
        value={this.state.value} 
        change={this.handleInputChange}
        />
        <Result 
        weather = {this.state}
        />
      </div>
    );
  }
}



export default App;
