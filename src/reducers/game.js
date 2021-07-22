import {GAME_ADD_TODO_TEST} from '../actions/game';

const initialState = {
  game: {},
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case GAME_ADD_TODO_TEST: {
      return {
        ...state,
        game: action.value,
      }
    }
    default:
      return state
  }
}

export default gameSettings
