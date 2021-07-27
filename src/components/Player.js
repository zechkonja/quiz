// $FlowFixMe
import player from "../assets/player.jpg";
import styled from "styled-components";
import { Image, Row, Col } from "react-bootstrap";

const Player = ({ name, score }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div>{name}</div>
          <div>Score: {score}</div>
          <Image roundedCircle width={100} height={100} src={player} />
        </Col>
        <Col>
          <div> My answer: Economics, Politics</div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div``;

export default Player;
