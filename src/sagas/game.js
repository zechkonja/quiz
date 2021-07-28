import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  updateGameQuestion,
  setGamePlayers,
  INIT_GAME,
  UPDATE_GAME_QUESTION,
  UPDATE_GAME_QUESTION_PREV,
  FINISH_GAME,
  updateActiveQuestion,
  UPDATE_USER_ANSWER,
  VALIDATE_USER_ANSWER,
  updatePlayersScore,
  updateTimer,
} from "../actions/game";
import { updateGameStart, updateShowModal } from "../actions/gameSettings";
import { createGame } from "../services/quizService";
import { generalTimer, generateId } from "../lib/utils";

const numberOfPlayersState = (state) => state.gameSettings.playerNumber;
const questionNumberState = (state) => state.gameSettings.questionNumber;
const gameCategoryIdState = (state) => state.gameSettings.gameCategoryId;
const questionTypeState = (state) => state.gameSettings.questionType;
const activeQuestionState = (state) => state.game.activeQuestion;
const questionsState = (state) => state.game.questions;
const playersState = (state) => state.game.players;

function* initGame(action) {
  try {
    const numberOfPlayers = yield select(numberOfPlayersState);
    const questionNumber = yield select(questionNumberState);
    const gameCategoryId = yield select(gameCategoryIdState);
    const questionType = yield select(questionTypeState);

    // get questions
    const response = yield call(createGame, {
      amount: questionNumber,
      category: gameCategoryId,
      type: questionType,
    });
    yield put(updateGameQuestion(response.results));

    // init player object
    const players = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      if (i === 0) {
        players.push({
          id: generateId(),
          type: "human",
          name: "Me",
          score: 0,
          answers: [
            ...response.results.map((q, i) => {
              return { questionNumber: i, userAnswer: "", answerTime: 0 };
            }),
          ],
        });
      } else {
        players.push({
          id: generateId(),
          type: "computer",
          name: `Player ${i}`,
          score: 0,
          answers: [
            ...response.results.map((q, i) => {
              return { questionNumber: i, userAnswer: "", answerTime: 0 };
            }),
          ],
        });
      }
    }

    yield put(setGamePlayers(players));
    yield put(updateGameStart(true));
  } catch (e) {
    yield put({ type: "INIT GAME FAILED", message: e.message });
  }
}

function* updateActiveGameQuestion(action) {
  try {
    let activeQuestion = yield select(activeQuestionState);
    yield call(validateAnswer);
    yield put(updateActiveQuestion(++activeQuestion));
    yield put(updateTimer(generalTimer));
  } catch (e) {
    yield put({ type: "UPDATE NEXT QUESTION GAME FAILED", message: e.message });
  }
}

function* updateActiveGameQuestionPrev(action) {
  try {
    let activeQuestion = yield select(activeQuestionState);
    yield put(updateActiveQuestion(--activeQuestion));
  } catch (e) {
    yield put({ type: "UPDATE PREV QUESTION GAME FAILED", message: e.message });
  }
}

function* finishGame(action) {
  try {
    yield call(validateAnswer);
    yield put(updateShowModal(true));
  } catch (e) {
    yield put({ type: "FINISH GAME FAILED", message: e.message });
  }
}

function* updateAnswer(action) {
  try {
    const players = yield select(playersState);

    const updatedPlayers = players.map((p) => {
      if (p.id === action.value.id) {
        p.answers[action.value.questionId].questionNumber =
          action.value.questionId;
        p.answers[action.value.questionId].userAnswer = action.value.value;
        p.answers[action.value.questionId].answerTime = action.value.answerTime;
      }
      return p;
    });
    yield put(updatePlayersScore(updatedPlayers));
  } catch (e) {
    yield put({ type: "UPDATE ANSWER FAILED", message: e.message });
  }
}

function* validateAnswer(action) {
  try {
    const activeQuestion = yield select(activeQuestionState);
    const questions = yield select(questionsState);
    const players = yield select(playersState);

    const playerAnsweredFirst = players.reduce((prev, curr) => {
      return prev.answers[activeQuestion].answerTime <
        curr.answers[activeQuestion].answerTime
        ? prev
        : curr;
    });

    // correct/incorrect answer
    // first/last answered
    const updatedPlayers = players.map((p, i) => {
      if (
        p.answers.filter(
          (a) => a.userAnswer === questions[activeQuestion].correct_answer
        ).length > 0
      ) {
        p.score += 10;
        if (
          playerAnsweredFirst.answers[activeQuestion].userAnswer ===
          questions[activeQuestion].correct_answer
        ) {
          p.score += 5;
        }
      } else {
        if (
          p.type === "human" &&
          p.answers[activeQuestion].userAnswer.length === 0
        ) {
          p.score -= 10;
        } else {
          p.score -= 5;
        }
      }
      return p;
    });

    yield put(updatePlayersScore(updatedPlayers));
  } catch (e) {
    yield put({ type: "VALIDATE ANSWER FAILED", message: e.message });
  }
}

export function* watchGame() {
  yield takeLatest(INIT_GAME, initGame);
  yield takeLatest(UPDATE_GAME_QUESTION, updateActiveGameQuestion);
  yield takeLatest(UPDATE_GAME_QUESTION_PREV, updateActiveGameQuestionPrev);
  yield takeLatest(FINISH_GAME, finishGame);
  yield takeLatest(UPDATE_USER_ANSWER, updateAnswer);
  yield takeLatest(VALIDATE_USER_ANSWER, validateAnswer);
}
