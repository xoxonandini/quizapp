import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import Results from "./Results";
import { Container, Button, Spinner, Alert } from "react-bootstrap";

const Quiz = ({ onRestart }) => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data.json")
      .then((response) => {
        console.log("Full API Response:", response.data);

        const quizObject = response.data[0]; 

        if (
          quizObject &&
          quizObject.questions &&
          Array.isArray(quizObject.questions)
        ) {
          console.log("Extracted Questions:", quizObject.questions);
          setQuestions(quizObject.questions); 
        } else {
          setError("No valid questions available.");
          setQuestions([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching quiz data:", error);
        setError("Failed to load quiz. Please try again.");
        setQuestions([]);
        setLoading(false);
      });
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <Container className="quiz-container mt-4">
      {loading ? (
        <>
          <Spinner animation="border" role="status" />
          <p>Loading quiz...</p>
        </>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : quizStarted ? (
        currentQuestion < questions.length ? (
          <Question
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
          />
        ) : (
          <Results
            score={score}
            total={questions.length}
            onRestart={onRestart}
          />
        )
      ) : (
        <Button
          onClick={handleStartQuiz}
          variant="primary"
          size="lg"
          className="start-btn"
        >
          Start Quiz
        </Button>
      )}
    </Container>
  );
};

export default Quiz;
