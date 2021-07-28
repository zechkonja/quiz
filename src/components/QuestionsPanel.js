// @flow
import * as React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Form, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  updateQuestion,
  finishGame,
  updateUserAnswer,
  updateTimer,
} from "../actions/game";
import { useState, useEffect } from "react";
import { getAllAnswers, getAnswers, getTimer, getActiveQuestion, getQuestions, getPlayer } from "../reducers/game";
import {
  getRandomInt,
  getRandomIntBetween,
  generalTimer,
  shuffle,
} from "../lib/utils";

const randomTime1 = getRandomIntBetween(2, generalTimer);
const randomTime2 = getRandomIntBetween(2, generalTimer);
const randomTime3 = getRandomIntBetween(2, generalTimer);

const QuestionsPanel = (): React.Node => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const [questionOptions, setQuestionOptions] = useState([]);
  const timer = useSelector((state) => getTimer(state));
  const activeQuestion = useSelector((state) => getActiveQuestion(state));
  const questions = useSelector((state) => getQuestions(state));
  const me = useSelector((state) => getPlayer(state, 0));
  const p1 = useSelector((state) => getPlayer(state, 1));
  const p2 = useSelector((state) => getPlayer(state, 2));
  const p3 = useSelector((state) => getPlayer(state,3));
  const answers = useSelector((state) => getAllAnswers(state));
  const everybodyAnswered = useSelector((state) => getAnswers(state));

  useEffect(() => {
    // reorder answers
    setQuestionOptions(shuffle(answers));
  }, [answers]);

  let timer1;
  // run general timer
  useEffect(() => {
    timer1 = setTimeout(() => dispatch(updateTimer(timer - 1)), 1000);
    if (timer === 0 || everybodyAnswered) {
      clearTimeout(timer1);
    }

    return () => {
      clearTimeout(timer1);
    };
  }, [timer]);

  // select random answers at random moment
  useEffect(() => {
    if (p1 && timer === randomTime1) {
      const randomAnswer = getRandomInt(3);
      handleCheckboxUpdate({
        questionId: activeQuestion,
        option: randomAnswer,
        value: answers[randomAnswer],
        id: p1.id,
        time: generalTimer - randomTime1,
      });
    }
  }, [timer]);
  useEffect(() => {
    if (p2 && timer === randomTime2) {
      const randomAnswer = getRandomInt(3);
      handleCheckboxUpdate({
        questionId: activeQuestion,
        option: randomAnswer,
        value: answers[randomAnswer],
        id: p2.id,
        time: generalTimer - randomTime2,
      });
    }
  }, [timer]);
  useEffect(() => {
    if (p3 && timer === randomTime3) {
      const randomAnswer = getRandomInt(3);
      handleCheckboxUpdate({
        questionId: activeQuestion,
        option: randomAnswer,
        value: answers[randomAnswer],
        id: p3.id,
        time: generalTimer - randomTime3,
      });
    }
  }, [timer]);

  const handleNext = () => {
    setSelectedValue("");
    activeQuestion < questions.length - 1
      ? dispatch(updateQuestion())
      : dispatch(finishGame());
  };

  const paginationBasic = (
    <div>
      <Pagination>
        <Pagination.Next
          disabled={timer > 0 && !everybodyAnswered}
          onClick={handleNext}
        >
          {activeQuestion < questions.length - 1 ? "Next" : "Finish"}
        </Pagination.Next>
      </Pagination>
      <br />
    </div>
  );

  const handleCheckboxUpdate = ({ questionId, option, value, id, time }) => {
    dispatch(updateUserAnswer({ questionId, option, value, id, time }));
  };

  const updateValue = (e) => {
    const questionId = e.target.getAttribute("active-question");
    const option = e.target.getAttribute("answer");
    const value = e.target.value;
    setSelectedValue(value);
    handleCheckboxUpdate({
      questionId,
      option,
      value,
      id: me.id,
      time: generalTimer - timer,
    });
  };

  return (
    <div className="App">
      <div className="App-body">
        Question {activeQuestion + 1} of {questions.length}
        <Row>
          <Col>
            <b>{activeQuestion + 1}.</b> {questions[activeQuestion].question}
            <AnswersContainer disabled={everybodyAnswered || timer === 0}>
              {questionOptions.map((answer, i) => (
                <Form.Check
                  key={i}
                  name={`group${activeQuestion}`}
                  onChange={updateValue}
                  type={"radio"}
                  active-question={activeQuestion}
                  answer={i}
                  id={`question-${activeQuestion}-answer-${i}`}
                  label={answer}
                  value={answer}
                  checked={selectedValue === answer}
                />
              ))}
            </AnswersContainer>
          </Col>
          <Col>
            Timer: {timer > 0 ? `${timer}s` : <b style={{ color: "red" }}>0</b>}
          </Col>
        </Row>
        {paginationBasic}
      </div>
    </div>
  );
};

const AnswersContainer = styled.div`
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

export default QuestionsPanel;
