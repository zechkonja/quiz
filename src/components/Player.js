// @flow
import * as React from 'react';
import player from "../assets/player.jpg";
import styled from "styled-components";
import { Image, Row, Col } from "react-bootstrap";

type Props = {
  name: string,
  score: number,
  answer: string,
  time: number,
  answered: number
}

const Player = (props: Props): React.Node => {
  return (
    <Container answered={props.answered}>
      <Row>
        <Col>
          <Image roundedCircle width={70} height={70} src={player} />
          <div>{props.name}</div>
          <div>Score: {props.score}</div>
        </Col>
        <Col>
          <div>Answer: {props.answer}</div>
          <div>Time: {props.time}</div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => (props.answered ? "#535b6b" : "transparent")};
`;

export default Player;
