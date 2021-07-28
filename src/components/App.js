// $FlowFixMe
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import HomeGameSettings from "../views/HomeGameSettings";
import Game from "../views/Game";
import { useEffect } from "react";
import { getCategories, updateShowModal } from "../actions/gameSettings";
import { getRankedPlayers } from "../reducers/game";
import GameModal from "./GameModal";

const App = () => {
  const dispatch = useDispatch();
  const startGame = useSelector((state) => state.gameSettings.startGame);
  const showModal = useSelector((state) => state.gameSettings.showModal);
  const rankedPlayers = useSelector((state) => getRankedPlayers(state));

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    dispatch(getCategories());
  };

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
