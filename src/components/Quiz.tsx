import React, { useState } from "react";
import Question from "./Question";
import quizData from "../data/quizData";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestion].correctOption) {
      setScore(score + 1);
    }
  
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`You scored ${score} out of ${quizData.length}`);
    }
  };
  

  return (
    <div className="quiz-container">
      {currentQuestion < quizData.length ? (
        <Question
          question={quizData[currentQuestion]}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="quiz-finished">
          <h2>Quiz Finished!</h2>
          <p>
            You scored {score.toString()} out of {quizData.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;

