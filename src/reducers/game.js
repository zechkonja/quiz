import {
  UPDATE_GAME_QUESTIONS,
  UPDATE_GAME_PLAYERS,
  UPDATE_ACTIVE_GAME_QUESTION,
  UPDATE_USER_QUESTION_ANSWER,
} from "../actions/game";
import { shuffle } from "../lib/utils";

const initialState = {
  game: {},
  questions: [],
  activeQuestion: 0,
  players: [],
  timer: 15000,
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

export default gameSettings;
