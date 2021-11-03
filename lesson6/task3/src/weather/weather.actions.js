import { GetWeatherData } from './weather.gateway.js';

export const CITIES_DATA_RECEIVED = 'CITIES_DATA_RECEIVED';

export const citiesDataReceived = citiesData => ({
  type: CITIES_DATA_RECEIVED,
  payload: { citiesData },
});

export const getWeatherData = () =>
  // eslint-disable-next-line func-names
  function (dispatch) {
    GetWeatherData().then(citiesData => {
      dispatch(citiesDataReceived(citiesData));
    });
  };
