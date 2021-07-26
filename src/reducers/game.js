import {UPDATE_GAME_QUESTIONS, UPDATE_GAME_PLAYERS, UPDATE_ACTIVE_GAME_QUESTION} from '../actions/game';

const initialState = {
  game: {},
  questions: [],
  activeQuestion: 0,
  players: []
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAME_QUESTIONS: {
      return {
        ...state,
        questions: action.value,
      }
    }
    case UPDATE_GAME_PLAYERS: {
      return {
        ...state,
        players: action.value,
      }
    }
    case UPDATE_ACTIVE_GAME_QUESTION: {
      return {
        ...state,
        activeQuestion: action.value,
      }
    }
    default:
      return state
  }
}

export default gameSettings
