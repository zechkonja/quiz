import { createStore, combineReducers } from 'redux';
import gameSettings from '../reducers/gameSettings';
import game from '../reducers/game';

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const rootReducers = combineReducers({
  gameSettings,
  game
})


export function createReduxStore() {
  return createStore(rootReducers, enableReduxDevTools);
}
