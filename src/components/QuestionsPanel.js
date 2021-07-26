// $FlowFixMe
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {Pagination, Form, Row, Col} from 'react-bootstrap';
import {shuffle} from '../lib/utils';
import {updateQuestion, updateQuestionPrev, finishGame} from '../actions/game';

const QuestionsPanel = () => {
  const dispatch = useDispatch();
  const activeQuestion = useSelector((state) => state.game.activeQuestion);
  const questions = useSelector((state) => state.game.questions);

  const allAnswers = () => {

    const all = questions[activeQuestion].incorrect_answers;
    if(!all.includes(questions[activeQuestion].correct_answer)) {
      all.push(questions[activeQuestion].correct_answer)
    }
    return shuffle(all);
  }

  const handlePrevious = () => {
    dispatch(updateQuestionPrev());
  }

  const handleNext = () => {
    activeQuestion < questions.length - 1 ? dispatch(updateQuestion()) : dispatch(finishGame())
  }

  const paginationBasic = (
    <div>
      <Pagination>
        <Pagination.Prev onClick={handlePrevious} disabled={activeQuestion === 0}>Previous</Pagination.Prev>
        <Pagination.Next onClick={handleNext}>{activeQuestion < questions.length - 1 ? 'Next' : 'Finish'}</Pagination.Next>
      </Pagination>
      <br />
    </div>
  );


  return (
    <div className="App">
      <div className="App-body">
        Question {activeQuestion} of {questions.length}
        <Row>
          <Col>
            <b>{activeQuestion}.</b> {questions[activeQuestion].question}
            <div>
              {allAnswers().map((answer, i) => (
                <Form.Check
                  key={i}
                  type={'checkbox'}
                  id={`question-${activeQuestion}-answer-${i}`}
                  label={answer}
                />
              ))}
            </div>
          </Col>
          <Col>Timer: 15s</Col>
        </Row>
        {paginationBasic}
      </div>
    </div>
  );
}

export default QuestionsPanel;
