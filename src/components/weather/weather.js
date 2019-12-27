import React from 'react'
import styled from 'styled-components';
import CurrentWeatherInfoDiv from '../CurrentWeatherInfo/CurrentWeatherInfo';
import NextDaysWeatherInfo from '../NextDaysWeatherInfo/NextDaysWeatherInfo';

const weather = ({city,temp}) => {
    return (
        <SingleWeatherArea>
            <CurrentWeatherInfoDiv city={city} currentTemp={temp[0]}></CurrentWeatherInfoDiv>
            <NextDaysWeatherInfo tempList={temp}></NextDaysWeatherInfo>
        </SingleWeatherArea>
        
    );
}

const SingleWeatherArea = styled.div`
width: 100%;
height : 250px;
margin : 10px 0;
border : 1px solid ghostwhite;
box-sizing : border-box;
`;


export default weather;