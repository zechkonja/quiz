import React from "react";
import { Button, Modal } from "react-bootstrap";

const GameModal = ({ show }) => {
  const handleClose = () => {
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
            <li>Nemanja, score: 20</li>
            <li>Player 3, score: 16</li>
            <li>Player 1, score: 3</li>
            <li>Player 2, score: -20</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Start new Quiz
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GameModal;
