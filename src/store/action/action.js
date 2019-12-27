import * as actionType from "./actionTypes";
import axios from "axios";

const cities = ["london", "Tel aviv", "paris", "Rishon LeZiyyon"];

export const storeWeather = weathers => {
  return {
    type: actionType.STORE_WEATHER,
    weathers: weathers
  };
};

export const storeCustomWeather = weather => {
  return {
    type: actionType.STORE_CUSTOM_WEATHER,
    weather: weather
  };
};


export const removeCityHandler = name => {
  return {
    type: actionType.REMOVE_CITY,
    name: name
  };
};

export const initWeather = () => {
  return dispatch => {
    return Promise.all(
      cities.map(city => {
        return axios.get(
          "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
            city +
            "&units=metric&cnt=6&appid=99301679b6a40b198c35d6daff2cf1a1"
        );
      })
    ).then(weather => {
      dispatch(storeWeather(weather));
    });
  };
};

export const addCustomCityWeather = (city) => {
  console.log(city);
  return dispatch =>{
    axios.get( "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    city +
    "&units=metric&cnt=6&appid=99301679b6a40b198c35d6daff2cf1a1").then(res => {
      dispatch(storeCustomWeather(res.data));

    })
  }

}