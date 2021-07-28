import {
  UPDATE_START_GAME,
  UPDATE_PLAYER_NUMBER,
  UPDATE_GAME_CATEGORIES,
  UPDATE_GAME_CATEGORY,
  UPDATE_GAME_QUESTION_NUMBER,
  UPDATE_SHOW_MODAL,
} from "../actions/gameSettings";

export const initialState = {
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

export function getStartGame(state) {
  return state.gameSettings.startGame;
}

export function getShowModal(state) {
  return state.gameSettings.showModal;
}

export function getPlayerNumber(state) {
  return state.gameSettings.playerNumber;
}

export function getGameCategories(state) {
  return state.gameSettings.gameCategories;
}

export default gameSettings;
