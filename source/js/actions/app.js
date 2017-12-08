import api from 'api';

export const TEST_ACTION = 'TEST_ACTION';

export const TEST_ASYNC_ACTION_START = 'TEST_ASYNC_ACTION_START';
export const TEST_ASYNC_ACTION_ERROR = 'TEST_ASYNC_ACTION_ERROR';
export const TEST_ASYNC_ACTION_SUCCESS = 'TEST_ASYNC_ACTION_SUCCESS';

export const WEATHER_ASYNC_ACTION_START = 'WEATHER_ASYNC_ACTION_START';
export const WEATHER_ASYNC_ACTION_ERROR = 'WEATHER_ASYNC_ACTION_ERROR';
export const WEATHER_ASYNC_ACTION_SUCCESS = 'WEATHER_ASYNC_ACTION_SUCCESS';
export const SET_ZIPCODE = 'SET_ZIPCODE';
export const SET_ZIPCODE2 = 'SET_ZIPCODE2';
export const FORECAST_ASYNC_ACTION_START = 'FORECAST_ASYNC_ACTION_START';
export const FORECAST_ASYNC_ACTION_SUCCESS = 'FORECAST_ASYNC_ACTION_SUCCESS';
export const FORECAST_ASYNC_ACTION_ERROR = 'FORECAST_ASYNC_ACTION_ERROR';

// Test action

export function testAction() {
  return {
    type: TEST_ACTION,
  };
}


// Weather Async action 
function weatherAsyncStart() {
  return {
    type: WEATHER_ASYNC_ACTION_START,
    
  };
}
function weatherAsyncSuccess(data) {
	console.log(data);
  return {
    type: SET_ZIPCODE,
    data,
  };
}

function weatherAsyncError(error) {
  return {
    type: WEATHER_ASYNC_ACTION_ERROR,
    error,
  };
}
export const setZipcode = zipcode => {

  return function (dispatch) {
    dispatch(weatherAsyncStart());
    api.getWeatherByZip(zipcode)
      .then(data => dispatch(weatherAsyncSuccess(data)))
      .catch(error => dispatch(weatherAsyncError(error)));
  };
}

function get5DayForecastAsyncStart() {
  return {
    type: FORECAST_ASYNC_ACTION_START,
    
  };
}
function get5DayForecastSuccess(data) {
  return {
    type: FORECAST_ASYNC_ACTION_SUCCESS,
    data,
  };
}

function get5DayForecastAsyncError(error) {
  return {
    type: FORECAST_ASYNC_ACTION_ERROR,
    error,
  };
}
export const get5DayForecast = zipcode => {

  return function (dispatch) {
    dispatch(get5DayForecastAsyncStart());
    api.get5DayForecast(zipcode)
      .then(data => dispatch(get5DayForecastSuccess(data)))
      .catch(error => dispatch(get5DayForecastAsyncError(error)));
  };
}
 
export function setZipcode2(newZip) {
  return {
    type: SET_ZIPCODE,
    newZip
  };
}
export function weatherAsync() {
  return function (dispatch) {
    api.weatherAsync()
      .then(data => dispatch(weatherAsyncSuccess(data)))
      .catch(error => dispatch(weatherAsyncError(error)));
  };
}

// Async action example
function testAsyncStart() {
  return {
    type: TEST_ASYNC_ACTION_START,
  };
}

function testAsyncSuccess(data) {
  return {
    type: TEST_ASYNC_ACTION_SUCCESS,
    data,
  };
}

function testAsyncError(error) {
  return {
    type: TEST_ASYNC_ACTION_ERROR,
    error,
  };
}

export function testAsync() {
  return function (dispatch) {
    dispatch(testAsyncStart());

    api.testAsync()
      .then(data => dispatch(testAsyncSuccess(data)))
      .catch(error => dispatch(testAsyncError(error)));
  };
}


// Update
