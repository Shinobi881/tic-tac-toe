import _ from 'lodash';
import * as utils from './reducer_utils';
import { CHECK_WIN, CHECK_WIN_COUNT, X_WINNER, O_WINNER, CATS_GAME } from '../actions/action_types';

export default (state = null, action) => {
  console.log('From game logic: ', action.type);
  return state;
}