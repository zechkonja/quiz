// $FlowFixMe
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Form, Row, Col } from "react-bootstrap";
import { shuffle } from "../lib/utils";
import {
  updateQuestion,
  updateQuestionPrev,
  finishGame,
  updateUserAnswer,
} from "../actions/game";
import Answers from "./Answers";
import React, { useState } from "react";
import { getAllAnswers } from "../reducers/game";

const QuestionsPanel = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const activeQuestion = useSelector((state) => state.game.activeQuestion);
  const questions = useSelector((state) => state.game.questions);
  const me = useSelector((state) => state.game.players[0]);

  const answers = useSelector((state) => getAllAnswers(state));

  const handlePrevious = () => {
    dispatch(updateQuestionPrev());
  };

  const handleNext = () => {
    setSelectedValue("");
    activeQuestion < questions.length - 1
      ? dispatch(updateQuestion())
      : dispatch(finishGame());
  };

  const paginationBasic = (
    <div>
      <Pagination>
        <Pagination.Prev
          onClick={handlePrevious}
          disabled={activeQuestion === 0}
        >
          Previous
        </Pagination.Prev>
        <Pagination.Next onClick={handleNext}>
          {activeQuestion < questions.length - 1 ? "Next" : "Finish"}
        </Pagination.Next>
      </Pagination>
      <br />
    </div>
  );

  const handleCheckboxUpdate = ({ questionId, option, value }) => {
    dispatch(updateUserAnswer({ questionId, option, value, id: me.id }));
  };

  const updateValue = (e) => {
    const questionId = e.target.getAttribute("active-question");
    const option = e.target.getAttribute("answer");
    const value = e.target.value;
    setSelectedValue(value);
    handleCheckboxUpdate({ questionId, option, value });
  };

  return (
    <div className="App">
      <div className="App-body">
        Question {activeQuestion} of {questions.length}
        <Row>
          <Col>
            <b>{activeQuestion}.</b> {questions[activeQuestion].question}
            <div>
              {answers.map((answer, i) => (
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

              {/*<Answers answers={allAnswers()} activeQuestion={activeQuestion} handleCheckboxUpdate={handleCheckboxUpdate} />*/}
            </div>
          </Col>
          <Col>Timer: 15s</Col>
        </Row>
        {paginationBasic}
      </div>
    </div>
  );
};

export default QuestionsPanel;
