import React, { useState } from "react";
import { Question as QuestionType } from "../data/quizData";

interface Props {
  question: QuestionType;
  onAnswer: (selectedOption: string) => void;
}

const Question: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null); 

  const handleOptionClick = (optionIndex: number) => {
    setSelectedOption(question.options[optionIndex]); 
  };

  const submitAnswer = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
    }
  };

  return (
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
    </div>
  );
};

export default Question;
