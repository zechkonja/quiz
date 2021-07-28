export const INIT_GAME = "INIT_GAME";
export const UPDATE_GAME_QUESTIONS = "UPDATE_GAME_QUESTIONS";
export const UPDATE_GAME_PLAYERS = "UPDATE_GAME_PLAYERS";
export const UPDATE_GAME_QUESTION = "UPDATE_GAME_QUESTION";
export const UPDATE_ACTIVE_GAME_QUESTION = "UPDATE_ACTIVE_GAME_QUESTION";
export const UPDATE_GAME_QUESTION_PREV = "UPDATE_GAME_QUESTION_PREV";
export const UPDATE_ACTIVE_GAME_QUESTION_PREV =
  "UPDATE_ACTIVE_GAME_QUESTION_PREV";
export const FINISH_GAME = "FINISH_GAME";
export const UPDATE_USER_ANSWER = "UPDATE_USER_ANSWER";
export const VALIDATE_USER_ANSWER = "VALIDATE_USER_ANSWER";
export const UPDATE_QUESTION_TIMER = "UPDATE_QUESTION_TIMER";
export const UPDATE_PLAYERS_SCORE = "UPDATE_PLAYERS_SCORE";

export const initGame = () => ({
  type: INIT_GAME,
});

export const setGamePlayers = (players) => ({
  type: UPDATE_GAME_PLAYERS,
  value: players,
});

export const updateGameQuestion = (questions) => ({
  type: UPDATE_GAME_QUESTIONS,
  value: questions,
});

export const updateQuestion = () => ({
  type: UPDATE_GAME_QUESTION,
});

export const updateQuestionPrev = () => ({
  type: UPDATE_GAME_QUESTION_PREV,
});

export const updateActiveQuestion = (value) => ({
  type: UPDATE_ACTIVE_GAME_QUESTION,
  value,
});

export const updateActiveQuestionPrev = (value) => ({
  type: UPDATE_ACTIVE_GAME_QUESTION_PREV,
  value,
});

export const finishGame = () => ({
  type: FINISH_GAME,
});

export const updateUserAnswer = (value) => ({
  type: UPDATE_USER_ANSWER,
  value,
});

export const updateTimer = (value) => ({
  type: UPDATE_QUESTION_TIMER,
  value,
});

export const updatePlayersScore = (value) => ({
  type: UPDATE_PLAYERS_SCORE,
  value,
});
