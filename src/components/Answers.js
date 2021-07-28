import React from "react";
import { Form } from "react-bootstrap";

const Answers = ({ answers, activeQuestion, handleCheckboxUpdate }) => {
  const updateValue = (e) => {
    const questionId = e.target.getAttribute("active-question");
    const option = e.target.getAttribute("answer");
    const value = e.target.value;
    handleCheckboxUpdate({ questionId, option, value });
  };

  return answers.map((answer, i) => (
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
    />
  ));
};

export default Answers;
