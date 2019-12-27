import React, { Component } from "react";
import Header from "./UI/Header/Header";
import { connect } from "react-redux";
import * as action from "./store/action/action";
import Search from "./components/Search/Search";
import Weathers from "./components/weather/weathers";
import Autocomplete from "./components/Search/Autocomplete";
import city from "./data/city.json";
import "./App.css";

class App extends Component {
  state = {
    cityName: []
  };

  componentDidMount() {
    this.props.initWeather();
    let array = [];
    array = city.map(el => {
      return el.name;
    });
    this.setState({ cityName: [...array] });
  }

  render() {
    return (
      <div className="App">
        <Header>hey</Header>
        <Search></Search>
        {/* <Autocomplete suggestions={this.state.cityName} />   */}
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
    initWeather: () => dispatch(action.initWeather())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
