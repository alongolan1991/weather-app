import React from 'react'
import styled from 'styled-components';
import Weather from './weather';

const weathers = ({weathers}) => {
    
    const weatherss = weathers.map(el => {
        return <Weather key={el.city.id} city={el.city.name} temp={el.list}/>
    });

    return (
        <WeatherBox>
            {weatherss}
        </WeatherBox>
    );
}

const WeatherBox = styled.div`
    width : 80%;
    height : 90vh;
    margin : 10px auto;

`;
export default weathers;