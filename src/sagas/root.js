import {all} from 'redux-saga/effects';
import {watchGameSettings} from './gameSettings';
import {watchGame} from './game';


export function* rootSaga(){
  yield all([
    watchGameSettings(),
    watchGame(),
  ]);
}
