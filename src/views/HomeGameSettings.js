// $FlowFixMe

import { useSelector, useDispatch } from "react-redux";
import {
  updateNumberOfPlayers,
  updateGameCategory,
  updateQuestionNumber,
} from "../actions/gameSettings";
import { initGame } from "../actions/game";
import "../components/App.css";
import { Button, Form } from "react-bootstrap";

const HomeGameSettings = () => {
  const dispatch = useDispatch();
  const playerNumber = useSelector((state) => state.gameSettings.playerNumber);
  const gameCategories = useSelector(
    (state) => state.gameSettings.gameCategories
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(initGame());
  };
  const handlePlayerChange = (event) => {
    dispatch(updateNumberOfPlayers(event.target.value));
  };

  const handleCategoryChange = (event) => {
    dispatch(updateGameCategory(event.target.value));
  };

  const handleNumberQuestionChange = (event) => {
    dispatch(updateQuestionNumber(event.target.value));
  };

  return (
    <div>
      <h3>Choose game settings:</h3>
      <form onSubmit={handleSubmit}>
        <label className={"form-label"}>Number of Players:</label>
        <Form.Select onChange={handlePlayerChange} value={playerNumber}>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </Form.Select>
        <br />
        <label className={"form-label"}>Game category:</label>
        <Form.Select onChange={handleCategoryChange} value={playerNumber}>
          {gameCategories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </Form.Select>
        <br />
        <label className={"form-label"}>Number of Questions:</label>
        <input
          type="number"
          min="1"
          max="50"
          onKeyUp={handleNumberQuestionChange}
        />
        <br />
        <div className="d-grid gap-2 game-start-button">
          <Button variant="secondary" size="lg" type={"submit"}>
            START GAME
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeGameSettings;
