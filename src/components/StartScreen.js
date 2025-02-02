import React from "react";
import { Button } from "react-bootstrap";

const StartScreen = ({ onStart }) => {
  return (
    <div className="start-screen">
      <h1>Welcome to the Quiz!</h1>
      <Button variant="primary" onClick={onStart}>
        Start Quiz
      </Button>
    </div>
  );
};

export default StartScreen;
