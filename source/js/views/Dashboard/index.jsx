import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync, weatherAsync, setZipcode, get5DayForecast } from 'actions/app';
import CircleSvg from '../../../assets/svg/circle.svg';
import SquareSvg from '../../../assets/svg/square.svg';
import TriangleSvg from '../../../assets/svg/triangle.svg';
import bookImg from '../../../assets/img/book2.jpg';
import WeatherNav from 'components/Global/WeatherNav';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
  zipcode: state.app.get('zipcode'),
  localWeather: state.app.get('localWeather'),
  forecastData: state.app.get('forecastData'),
}))
export default class WeatherHome extends Component {
  static propTypes = {
    asyncData: PropTypes.object,
    asyncError: PropTypes.string,
    asyncLoading: PropTypes.bool,
    counter: PropTypes.number,
    zipcode: PropTypes.number,
    // from react-redux connect
    dispatch: PropTypes.func,
    localWeather: PropTypes.object,
    forecastData: PropTypes.object,
  }

  constructor() {
    super();

    this.handleAsyncButtonClick = this.handleAsyncButtonClick.bind(this);
    this.handleTestButtonClick = this.handleTestButtonClick.bind(this);
    this.handleZipcodeSubmit = this.handleZipcodeSubmit.bind(this);
  }

  handleAsyncButtonClick() {
    const { dispatch } = this.props;
    dispatch(testAsync());
  }

  handleTestButtonClick() {
    const { dispatch } = this.props;

    dispatch(testAction());
  }
  handleZipcodeSubmit = (e) => {
    if(e) e.preventDefault();
    const zipcode = this.input.value;
    const { dispatch } = this.props;
    dispatch(setZipcode(zipcode));
    dispatch(get5DayForecast(zipcode));
    
    //console.log('Your zipcode', zipcode);
    //const { dispatch } = this.props;

    //dispatch(getWeather());
  }

  render() {
    const {
      asyncData,
      asyncError,
      asyncLoading,
      counter,
      zipcode, 
      localWeather,
      forecastData,
    } = this.props;
	var sunrise='';
	var sunset ='';
    return (
      <div className='Dashboard'>
        <h1>Weather App</h1>
        <p>
           React Redux App
        </p>

        <hr />

		<form onSubmit={this.handleZipcodeSubmit}>
	        <input placeholder="Zipcode" type="text"  ref={(element) => { this.input = element }} />
	        <button
            disabled={ asyncLoading }
            onClick={ this.handleZipcodeSubmit }
          >
            Get Weather
            </button>
	    </form>



        <div>{ localWeather &&
				
              <div> <h2>Location: { localWeather.name }</h2>
              <h3>Current Conditions: </h3>
              <p>{ localWeather.weather[0].main } - { localWeather.weather[0].description }<br />
              Temp: { localWeather.main.temp } <span className="high-low-temps">({ localWeather.main.temp_min } - { localWeather.main.temp_max })</span><br/>
              Humidity: { localWeather.main.humidity } <br />
              Sunrise: { sunrise } <br />
              Sunset: { sunset } </p></div>
             }
             </div>

      </div>
    );
  }
}
