import { Map } from 'immutable';

import {
  TEST_ACTION,
  TEST_ASYNC_ACTION_START,
  TEST_ASYNC_ACTION_ERROR,
  TEST_ASYNC_ACTION_SUCCESS,
  SET_ZIPCODE,
  WEATHER_ASYNC_ACTION_START,
  WEATHER_ASYNC_ACTION_ERROR,
  WEATHER_ASYNC_ACTION_SUCCESS,
  SET_ZIPCODE2,
  FORECAST_ASYNC_ACTION_START,
  FORECAST_ASYNC_ACTION_SUCCESS,
  FORECAST_ASYNC_ACTION_ERROR,
} from 'actions/app';


const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
  zipcode: null,
  localWeather: null,
  forecastData: null
});

const actionsMap = {
  [TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge(Map({
      counter,
    }));
  },
  [SET_ZIPCODE]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      localWeather: action.data,
    }));
  },
  [SET_ZIPCODE2]: (state, zip) => {
    const zipcode = state.get('zipcode');

    return state.merge(Map({
      zipcode: zip.newZip
    }));
  },
  
   [FORECAST_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      forecastLoading: true,
      forecastError: null,
      forecastData: null,
    }));
  },
  [FORECAST_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      forecastLoading: false,
      forecastError: action.error.message,
    }));
  },
  [FORECAST_ASYNC_ACTION_SUCCESS]: (state, action) => {
	
    return state.merge(Map({
      forecastLoading: false,
      forecastData: action.data,
    }));
  },
  
  // Weather action
  [WEATHER_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [WEATHER_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [WEATHER_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncData: action.data,
    }));
  },

  // Async action
  [TEST_ASYNC_ACTION_START]: (state) => {
    return state.merge(Map({
      asyncLoading: true,
      asyncError: null,
      asyncData: null,
    }));
  },
  [TEST_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncError: action.error.message,
    }));
  },
  [TEST_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      asyncData: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
