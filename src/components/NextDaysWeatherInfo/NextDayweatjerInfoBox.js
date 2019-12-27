import React from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import WeatherIcon from '../../UI/WeatherIcon/WeatherIcon';
const nextDayweatjerInfoBox = ({tempInfo}) => {

    let tempDate = new Date(tempInfo.dt * 1000);
    const updatedDate = dateFormat(tempDate, "dddd, mmmm dS, yyyy");

    console.log(tempInfo);
    return (
        <WeatherBox>
            <DateHeader>{updatedDate}</DateHeader>
            <InfoHeader>{Math.round(tempInfo.temp.day)}{"\u00b0"}</InfoHeader>
            <InfoHeader>{tempInfo.weather[0].description}</InfoHeader>
            <WeatherIcon icon={tempInfo.weather[0].icon}></WeatherIcon>

        </WeatherBox>
    )

}

const WeatherBox = styled.div`
    width : 18%;
    height : 100%;
    background-color : cadetblue;
    display : flex;
    padding : 10px;
    box-sizing : border-box;
    flex-direction : column;
    align-items : center;
`;

const DateHeader = styled.h5`
margin : 0;
`;

const InfoHeader = styled.h4`
margin : 0 ;
`;



export default nextDayweatjerInfoBox;