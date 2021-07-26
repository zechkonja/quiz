// $FlowFixMe

import QuestionsPanel from "../components/QuestionsPanel";
import Player from "../components/Player";
import {Col, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const Game = () => {
  const players = useSelector((state) => state.game.players);
  return (
    <Row>
      <Col md={9}><QuestionsPanel/></Col>
      <Col>
        {players.map((p,i)=>(
          <Player key={i} name={p.name} score={p.score}/>
        ))}
      </Col>
    </Row>
  )
}

export default Game;
