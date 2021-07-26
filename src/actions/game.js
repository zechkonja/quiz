export const INIT_GAME = 'INIT_GAME';
export const UPDATE_GAME_SETTINGS = 'UPDATE_GAME_SETTINGS';
export const UPDATE_GAME_QUESTIONS = 'UPDATE_GAME_QUESTIONS';
export const UPDATE_GAME_PLAYERS = 'UPDATE_GAME_PLAYERS';
export const UPDATE_GAME_QUESTION = 'UPDATE_GAME_QUESTION';
export const UPDATE_ACTIVE_GAME_QUESTION = 'UPDATE_ACTIVE_GAME_QUESTION';
export const UPDATE_GAME_QUESTION_PREV = 'UPDATE_GAME_QUESTION_PREV';
export const UPDATE_ACTIVE_GAME_QUESTION_PREV = 'UPDATE_ACTIVE_GAME_QUESTION_PREV';
export const FINISH_GAME = 'FINISH_GAME';

export const initGame = () => ({
  type: INIT_GAME,
})

export const setGamePlayers = players => ({
  type: UPDATE_GAME_PLAYERS,
  value: players
})

export const updateGameSettings = ()=> ({
  type: UPDATE_GAME_SETTINGS
})

export const updateGameQuestion = questions => ({
  type: UPDATE_GAME_QUESTIONS,
  value: questions
})

export const updateQuestion = () => ({
  type: UPDATE_GAME_QUESTION
})

export const updateQuestionPrev = () => ({
  type: UPDATE_GAME_QUESTION_PREV
})

export const updateActiveQuestion = value => ({
  type: UPDATE_ACTIVE_GAME_QUESTION,
  value
})

export const updateActiveQuestionPrev = value => ({
  type: UPDATE_ACTIVE_GAME_QUESTION_PREV,
  value
})

export const finishGame = () => ({
  type: FINISH_GAME,
})

