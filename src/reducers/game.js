import {
  UPDATE_GAME_QUESTIONS,
  UPDATE_GAME_PLAYERS,
  UPDATE_ACTIVE_GAME_QUESTION,
  UPDATE_USER_QUESTION_ANSWER,
  UPDATE_QUESTION_TIMER,
  UPDATE_PLAYERS_SCORE,
} from "../actions/game";
import { generalTimer } from "../lib/utils";

const initialState = {
  game: {},
  questions: [],
  activeQuestion: 0,
  players: [],
  timer: generalTimer,
};

const gameSettings = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_GAME_QUESTIONS: {
      return {
        ...state,
        questions: action.value,
      };
    }
    case UPDATE_GAME_PLAYERS: {
      return {
        ...state,
        players: action.value,
      };
    }
    case UPDATE_ACTIVE_GAME_QUESTION: {
      return {
        ...state,
        activeQuestion: action.value,
      };
    }
    case UPDATE_USER_QUESTION_ANSWER: {
      return {
        ...state,
        players: state.players.map((p) => {
          if (p.id === action.value.id) {
            p.answers[action.value.questionId].questionNumber =
              action.value.questionId;
            p.answers[action.value.questionId].userAnswer = action.value.value;
            p.answers[action.value.questionId].answerTime =
              action.value.answerTime;
          }
          return p;
        }),
      };
    }
    case UPDATE_QUESTION_TIMER: {
      return {
        ...state,
        timer: action.value,
      };
    }
    case UPDATE_PLAYERS_SCORE: {
      return {
        ...state,
        players: action.value,
      };
    }
    default:
      return state;
  }
};

export function getAllAnswers(state) {
  const all = state.game.questions[state.game.activeQuestion].incorrect_answers;
  if (
    !all.includes(
      state.game.questions[state.game.activeQuestion].correct_answer
    )
  ) {
    all.push(state.game.questions[state.game.activeQuestion].correct_answer);
  }
  // missing reordering shuffle
  return all;
}

export function getAnswers(state) {
  const allAnswered = state.game.players.filter(
    (p) => p.answers[state.game.activeQuestion].userAnswer.length !== 0
  );
  return allAnswered.length === state.game.players.length;
}

export function getRankedPlayers(state) {
  return state.game.players.sort(
    (a, b) => parseFloat(b.score) - parseFloat(a.score)
  );
}

export default gameSettings;
