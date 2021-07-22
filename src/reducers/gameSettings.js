import {ADD_TODO_TEST} from '../actions/gameSettings';

const initialState = {
  text: '',
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_TEST: {
      return {
        ...state,
        text: action.value,
      }
    }
    default:
      return state
  }
}

export default gameSettings
