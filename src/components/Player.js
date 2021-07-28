// $FlowFixMe
import player from "../assets/player.jpg";
import styled from "styled-components";
import { Image, Row, Col } from "react-bootstrap";

const Player = ({ name, score, answer, time, answered }) => {
  return (
    <Container answered={answered}>
      <Row>
        <Col>
          <Image roundedCircle width={70} height={70} src={player} />
          <div>{name}</div>
          <div>Score: {score}</div>
        </Col>
        <Col>
          <div>Answer: {answer}</div>
          <div>Time: {time}</div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => (props.answered ? "#535b6b" : "transparent")};
`;

export default Player;
