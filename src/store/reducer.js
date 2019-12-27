import * as actionType from "./action/actionTypes";

const initialState = {
  weather: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_WEATHER: {
      const array = action.weathers.map(el => {
        return el.data;
      });
      return {
        ...state,
        weather: state.weather.concat(array)
      };
    }
    case actionType.REMOVE_CITY: {
      const array = state.weather.filter(el => {
        return el.city.name !== action.name;
      });
      console.log(action.name);
      return {
        ...state,
        weather: array
      };
    }
    case actionType.STORE_CUSTOM_WEATHER: {
      return {
        ...state,
        weather: state.weather.concat(action.weather)
      };
    }
    default:
      return state;
  }
};

export default reducer;
