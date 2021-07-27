import {
  UPDATE_START_GAME,
  UPDATE_PLAYER_NUMBER,
  UPDATE_GAME_CATEGORIES,
  UPDATE_GAME_CATEGORY,
  UPDATE_GAME_QUESTION_NUMBER,
  UPDATE_SHOW_MODAL,
} from "../actions/gameSettings";

const initialState = {
  showModal: false,
  startGame: false,
  gameCategories: [],
  playerNumber: 2,
  gameCategoryId: 9, // General Knowledge
  questionNumber: 1,
  questionType: "multiple",
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_START_GAME: {
      return {
        ...state,
        startGame: action.value,
      };
    }
    case UPDATE_PLAYER_NUMBER: {
      return {
        ...state,
        playerNumber: action.value,
      };
    }
    case UPDATE_GAME_CATEGORIES: {
      return {
        ...state,
        gameCategories: action.value,
      };
    }
    case UPDATE_GAME_CATEGORY: {
      return {
        ...state,
        gameCategoryId: action.value,
      };
    }
    case UPDATE_GAME_QUESTION_NUMBER: {
      return {
        ...state,
        questionNumber: action.value,
      };
    }
    case UPDATE_SHOW_MODAL: {
      return {
        ...state,
        showModal: action.value,
      };
    }
    default:
      return state;
  }
};

export default gameSettings;
