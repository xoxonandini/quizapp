import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="app">
      {!quizStarted ? (
        <StartScreen onStart={() => setQuizStarted(true)} />
      ) : (
        <Quiz onRestart={() => setQuizStarted(false)} />
      )}
    </div>
  );
};

export default App;
