import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";
import dateFormat from "dateformat";
import WeatherIcon from "../../UI/WeatherIcon/WeatherIcon";
import { connect } from "react-redux";
import * as action from "../../store/action/action";

class CurrentWeatherInfo extends Component {
  state = {
    date: ""
  };

  componentDidMount() {
    let tempDate = new Date(this.props.currentTemp.dt * 1000);
    this.setState({ date: dateFormat(tempDate, "dddd, mmmm dS, yyyy") });
  }

  render() {
    return (
      <CurrentWeatherInfoDiv>
        <CityAndDate>
          <CityName>{this.props.city}</CityName>
          <DateHeader>{this.state.date}</DateHeader>
        </CityAndDate>
        <CurrentTempAndMaxMinTemp>
          {this.convert}
          <CurrentTemp>
            {this.props.currentTemp.weather[0].description}{" "}
            {Math.round(this.props.currentTemp.temp.day)}
            {"\u00b0"}
            <WeatherIcon icon={this.props.currentTemp.weather[0].icon} />
          </CurrentTemp>
          <MaxAndMinTemp>
            Max: {Math.round(this.props.currentTemp.temp.max)}
            {"\u00b0"} , Min: {Math.round(this.props.currentTemp.temp.min)}
            {"\u00b0"}
          </MaxAndMinTemp>
        </CurrentTempAndMaxMinTemp>
        <Button success={true}>More details</Button>
        <Button
          clicked={() => this.props.removeCityHandler(this.props.city)}
          success={false}
        >
          Remove
        </Button>
      </CurrentWeatherInfoDiv>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeCityHandler: name => dispatch(action.removeCityHandler(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CurrentWeatherInfo);

const CurrentWeatherInfoDiv = styled.div`
  width: 100%;
  height: 45%;
  border-bottom: 1px solid powderblue;
  display: flex;
  justify-content: space-between;
  background-color: gainsboro;
  box-sizing: border-box;
  padding: 10px;
  font-family : Inria Serif;

`;

const CityName = styled.h3`
  text-align: left;
  margin: 0;
`;

const DateHeader = styled.h4`
  text-align: left;
  margin: 20px 0;

`;

const CityAndDate = styled.div`
  flex-direction: column;
`;

const CurrentTempAndMaxMinTemp = styled.div`
  flex-direction: column;
`;

const MaxAndMinTemp = styled.p`
  font-size: 80%;
  margin: 0;
`;

const CurrentTemp = styled.h3`
  text-align: left;
  margin: 0;
  display: flex;
  align-items: center;
`;
