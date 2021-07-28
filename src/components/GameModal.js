// @flow
import * as React from 'react';
import { Button, Modal } from "react-bootstrap";

type Props = {
  show: boolean,
  rankedPlayers: Array<Object>,
  handleClose: () => void
}


const GameModal = (props: Props): React.Node => {
  const handleStartNew = () => {
    window.location.reload(false);
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rank list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {props.rankedPlayers.map((p, i) => (
              <li key={i}>
                {p.name}, score: {p.score}
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleStartNew}>
            Start new Quiz
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GameModal;
