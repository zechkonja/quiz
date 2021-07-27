import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../sagas/root";
import gameSettings from "../reducers/gameSettings";
import game from "../reducers/game";

const rootReducers = combineReducers({
  gameSettings,
  game,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// mount it on the Store
const store = createStore(rootReducers, enhancer);

sagaMiddleware.run(rootSaga);

export { store };
