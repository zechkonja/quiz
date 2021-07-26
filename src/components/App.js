// $FlowFixMe
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import HomeGameSettings from "../views/HomeGameSettings";
import Game from "../views/Game";
import {useEffect} from "react";
import {getCategories} from '../actions/gameSettings';
import GameModal from "./GameModal";

const App = () => {
  const dispatch = useDispatch();
  const startGame = useSelector((state) => state.gameSettings.startGame);
  const showModal = useSelector((state) => state.gameSettings.showModal);

  useEffect(() => {
    getCat();
  },[]);

  const getCat = () => {
    dispatch(getCategories());
  }

  return (
    <>
    <div className="App">
      <h2>Quiz</h2>
      <div className="App-body">
        {startGame ? <Game/> : <HomeGameSettings/>}
      </div>
    </div>
      <GameModal show={showModal} handleCloseModal={() => alert('close')}/>
  </>
  );
}

export default App;
