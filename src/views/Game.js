// $FlowFixMe

import QuestionsPanel from "../components/QuestionsPanel";
import Player from "../components/Player";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAnswers } from "../reducers/game";

const Game = () => {
  const players = useSelector((state) => state.game.players);
  const activeQuestion = useSelector((state) => state.game.activeQuestion);
  const showAnswers = useSelector((state) => getAnswers(state));
  return (
    <Row>
      <Col md={9}>
        <QuestionsPanel />
      </Col>
      <Col>
        {players.map((p, i) => (
          <div key={i}>
            <Player
              name={p.name}
              score={p.score}
              answer={showAnswers && p.answers[activeQuestion].userAnswer}
              answered={p.answers[activeQuestion].userAnswer.length > 0}
              time={showAnswers && p.answers[activeQuestion].answerTime}
            />
            <hr />
          </div>
        ))}
      </Col>
    </Row>
  );
};

export default Game;
