// $FlowFixMe
import React from "react";
import { Button, Modal } from "react-bootstrap";

const GameModal = ({ show, rankedPlayers, handleClose }) => {
  const handleStartNew = () => {
    window.location.reload(false);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rank list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {rankedPlayers.map((p, i) => (
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
