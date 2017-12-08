import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

promisePolyfill.polyfill();

function testAsync() {
  return fetch('http://date.jsontest.com/')
    .then(response => response.json());
}

function getWeatherByZip(zipcode) {
	
	return fetch('http://api.openweathermap.org/data/2.5/weather?zip='+zipcode+'&APPID=8d49efd187657a63ad75e01b56ca3f60&units=imperial')
   	 .then(response => response.json());
   	
}

function get5DayForecast(zipcode) {
	
	return fetch('http://api.openweathermap.org/data/2.5/forecast?zip='+zipcode+'&APPID=8d49efd187657a63ad75e01b56ca3f60&units=imperial')
   	 .then(response => response.json());
   	
}

export default {
  testAsync, getWeatherByZip, get5DayForecast
};
