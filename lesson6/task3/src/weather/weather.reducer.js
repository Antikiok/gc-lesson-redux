import { CITIES_DATA_RECEIVED } from './weather.actions.js';

const initialState = {
  citiesData: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case CITIES_DATA_RECEIVED: {
      return {
        ...state,
        citiesData: action.payload.citiesData,
      };
    }
    default:
      return state;
  }
};

export default weatherReducer;
