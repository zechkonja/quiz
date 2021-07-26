import { call, put, takeLatest } from 'redux-saga/effects';
import {GET_GAME_CATEGORIES, updateCategories} from '../actions/gameSettings';
import {getCategories} from '../services/quizService';

export function* getAllCategories(action) {
  try {
    const response = yield call(getCategories, {});
    yield put(updateCategories(response['trivia_categories']));
  } catch (e) {
    console.log('categories fetch failed', e)
  }
}


export function* watchGameSettings(){
  yield takeLatest(GET_GAME_CATEGORIES, getAllCategories);
}
