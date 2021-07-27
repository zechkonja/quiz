import { call, put, takeLatest, select } from "redux-saga/effects";
import {
  updateGameSettings,
  updateGameQuestion,
  setGamePlayers,
  INIT_GAME,
  UPDATE_GAME_QUESTION,
  UPDATE_GAME_QUESTION_PREV,
  FINISH_GAME,
  updateActiveQuestion,
  UPDATE_USER_ANSWER,
  VALIDATE_USER_ANSWER,
  updateUserQuestionAnswer,
} from "../actions/game";
import { updateGameStart, updateShowModal } from "../actions/gameSettings";
import { createGame } from "../services/quizService";
import { generateId } from "../lib/utils";

const numberOfPlayersState = (state) => state.gameSettings.playerNumber;
const questionNumberState = (state) => state.gameSettings.questionNumber;
const gameCategoryIdState = (state) => state.gameSettings.gameCategoryId;
const questionTypeState = (state) => state.gameSettings.questionType;
const activeQuestionState = (state) => state.game.activeQuestion;

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
          name: `Player ${i++}`,
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
    yield put(updateGameSettings());
    yield put(updateGameStart(true));
  } catch (e) {
    yield put({ type: "INIT GAME FAILED", message: e.message });
  }
}

function* updateActiveGameQuestion(action) {
  try {
    let activeQuestion = yield select(activeQuestionState);
    yield put(updateActiveQuestion(++activeQuestion));
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
    yield put(updateShowModal(true));
  } catch (e) {
    yield put({ type: "FINISH GAME FAILED", message: e.message });
  }
}

function* updateAnswer(action) {
  try {
    yield put(
      updateUserQuestionAnswer({
        id: action.value.id,
        option: action.value.option,
        value: action.value.value,
        questionId: action.value.questionId,
        answerTime: 3000, // update time
      })
    );
  } catch (e) {
    yield put({ type: "UPDATE ANSWER FAILED", message: e.message });
  }
}

function* validateAnswer(action) {
  try {
    // vidi da li je tacan odgoovr
    // primeni rulove - prvi - poslednji
    // izracunaj score
    //yield put(updateUserQuestionAnswer({action.value.activeQuestionId,}));
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
