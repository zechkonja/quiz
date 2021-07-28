// @flow
import * as React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import HomeGameSettings from "../views/HomeGameSettings";
import Game from "../views/Game";
import { useEffect } from "react";
import { getCategories, updateShowModal } from "../actions/gameSettings";
import { getRankedPlayers } from "../reducers/game";
import { getStartGame, getShowModal } from "../reducers/gameSettings";
import GameModal from "./GameModal";

const App = (): React.Node => {
  const dispatch = useDispatch();
  const startGame = useSelector((state) => getStartGame(state));
  const showModal = useSelector((state) => getShowModal(state));
  const rankedPlayers = useSelector((state) => getRankedPlayers(state));

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleClose = () => {
    dispatch(updateShowModal(false));
  };

  return (
    <>
      <div className="App">
        <h2>Quiz</h2>
        <div className="App-body">
          {startGame ? <Game /> : <HomeGameSettings />}
        </div>
      </div>
      <GameModal
        show={showModal}
        rankedPlayers={rankedPlayers}
        handleClose={handleClose}
      />
    </>
  );
};

export default App;
