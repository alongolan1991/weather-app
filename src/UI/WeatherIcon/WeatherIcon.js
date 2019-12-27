import React from "react";
import styled from "styled-components";

const weatherIcon = ({ icon }) => {
  return <WeatherIcon src={"http://openweathermap.org/img/wn/" + icon + "@2x.png" }/>;
};

const WeatherIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export default weatherIcon;
