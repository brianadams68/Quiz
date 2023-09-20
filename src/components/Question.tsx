import React, { useState, useEffect, useCallback } from "react";
import { Question as QuestionType } from "../data/quizData";

interface Props {
  question: QuestionType;
  onAnswer: (selectedOption: string) => void;
  onRestart: () => void;
}

const Question: React.FC<Props> = ({ question, onAnswer, onRestart }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(question.options[optionIndex]);
    setIsCorrect(null);
  };

  const submitAnswer = () => {
    if (selectedOption !== null) {
      const isOptionCorrect = selectedOption === question.correctOption;
      if (isOptionCorrect) {
        setScore(score + 1);
      }

      setIsCorrect(isOptionCorrect);
      onAnswer(selectedOption);
      setSelectedOption(null);

      setTimeout(() => {
        setIsCorrect(null);
        if (isOptionCorrect && question.id >= 7) { 
          setQuizCompleted(true);
        }
      }, 1000);
    }
  };

  const restartQuiz = useCallback(() => {
    setScore(0);
    setQuizCompleted(false);
    onRestart();
  }, [onRestart]); // Include onRestart in the dependency array
  
  useEffect(() => {
    if (quizCompleted) {
      const timeoutId = setTimeout(() => {
        restartQuiz();
      }, 5000);
  
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [quizCompleted, restartQuiz]); // Include restartQuiz in the dependency array
  
  return (
    <>
      <p className="score">Score</p>
      <p className="score-num">{score}</p>
      <div className="question-container">
        <h3>{question.questionText}</h3>
        <ul>
          {question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(index)}
              className={selectedOption === option ? "selected" : ""}
            >
              {option}
            </li>
          ))}
        </ul>
        <button onClick={submitAnswer}>Submit Answer</button>
        {isCorrect !== null && (
          <p className={isCorrect ? "correct" : "incorrect"}>
            {isCorrect ? "Correct!" : "Incorrect!"}
          </p>
        )}
      </div>
    </>
  );
};

export default Question;

