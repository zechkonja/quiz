export const UPDATE_PLAYER_NUMBER = 'UPDATE_PLAYER_NUMBER';
export const UPDATE_START_GAME = 'UPDATE_START_GAME';
export const GET_GAME_CATEGORIES = 'GET_GAME_CATEGORIES';
export const UPDATE_GAME_CATEGORIES = 'UPDATE_GAME_CATEGORIES';
export const UPDATE_GAME_CATEGORY = 'UPDATE_GAME_CATEGORY';
export const UPDATE_GAME_QUESTION_NUMBER = 'UPDATE_GAME_QUESTION_NUMBER';
export const UPDATE_SHOW_MODAL = 'UPDATE_SHOW_MODAL';

export const updateNumberOfPlayers = number => ({
  type: UPDATE_PLAYER_NUMBER,
  value: number
})

export const updateGameStart = value => ({
  type: UPDATE_START_GAME,
  value
})

export const getCategories = () => ({
  type: GET_GAME_CATEGORIES,
})

export const updateCategories = categories => ({
  type: UPDATE_GAME_CATEGORIES,
  value: categories
})

export const updateGameCategory = category => ({
  type: UPDATE_GAME_CATEGORY,
  value: category
})

export const updateQuestionNumber = questionNumber => ({
  type: UPDATE_GAME_QUESTION_NUMBER,
  value: questionNumber
})

export const updateShowModal = value => ({
  type: UPDATE_SHOW_MODAL,
  value
})
