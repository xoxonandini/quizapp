import React from "react";
import { Card, Button } from "react-bootstrap";

const Results = ({ score, total, onRestart }) => {
  return (
    <Card className="results-card">
      <Card.Body>
        <Card.Title>Quiz Completed!</Card.Title>
        <Card.Text>
          You scored {score} out of {total}!
        </Card.Text>
        <Button variant="success" onClick={onRestart}>
          Restart Quiz
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Results;
