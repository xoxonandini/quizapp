import React from "react";
import { Button, Card } from "react-bootstrap";

const Question = ({ question, handleAnswer }) => {
  if (!question || !question.options) {
    return <p>No options available.</p>;
  }

  return (
    <Card className="question-card">
      <Card.Body>
        <h4>{question.description}</h4>
        {question.options.map((option) => (
          <Button 
            key={option.id} 
            variant="outline-info" 
            className="option-btn" 
            onClick={() => handleAnswer(option.is_correct)}
          >
            {option.description}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
};

export default Question;
