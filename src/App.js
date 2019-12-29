import React, { Component } from "react";
import Header from "./UI/Header/Header";
import { connect } from "react-redux";
import * as action from "./store/action/action";
// import Search from "./components/Search/Search";
import Weathers from "./components/weather/weathers";
import Autocomplete from "./components/Search/Autocomplete";
import city from "./data/city.json";
import "./App.css";

class App extends Component {
  state = {
    cityName: [],
    // userInput: '',
  };

  componentDidMount() {
    this.props.initWeather();
    let array = [];
    array = city.map(el => {
      return el.name;
    });
    this.setState({ cityName: [...array] });
  }

  // getUserInputHandler = (event) => {
  //   this.setState({userInput : event.target.value });

  // }



  render() {
    return (
      <div className="App">
        <Header />
        {/* <Search value={this.state.userInput} clicked={() => this.props.addCustomCityWeather(this.state.userInput)} changed={this.getUserInputHandler}></Search> */}
        <Autocomplete suggestions={this.state.cityName} clicked={(userInput) => this.props.addCustomCityWeather(userInput)} />  
        <Weathers weathers={this.props.weathers}></Weathers>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weathers: state.weather
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initWeather: () => dispatch(action.initWeather()),
    addCustomCityWeather : (city) => dispatch(action.addCustomCityWeather(city)) 
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
