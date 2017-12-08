import { combineReducers } from 'redux';
import app from 'reducers/app';
import weather from 'reducers/weather';

export default combineReducers({
  app,
});
