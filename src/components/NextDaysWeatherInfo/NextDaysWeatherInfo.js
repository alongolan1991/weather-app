import React from "react";
import styled from "styled-components";
import NextDayweatjerInfoBox from "./NextDayweatjerInfoBox";

const nextDaysWeatherInfo = ({ tempList }) => {

  let weatherBoxs = tempList.slice(1).map(el => {
    return <NextDayweatjerInfoBox tempInfo={el} key={el.dt} />;
  });

  return (<NextDaysWeatherInfoDiv> {weatherBoxs} </NextDaysWeatherInfoDiv>);
};
const NextDaysWeatherInfoDiv = styled.div`
  width: 100%;
  height: 55%;
  display : flex;
  justify-content : space-between;
`;

export default nextDaysWeatherInfo;
