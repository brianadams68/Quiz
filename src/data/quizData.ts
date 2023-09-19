export interface Question {
  id: number;
  questionText: string;
  options: string[];
  correctOption: string;
}

const quizData: Question[] = [
  {
    id: 1,
    questionText: "Which country has 5 world cups?",
    options: ["Argentina", "Italy", "Germany", "Brazil"],
    correctOption: "Brazil",
  },
  {
    id: 2,
    questionText: "Where is the oldest University in Latin America?",
    options: ["Peru", "Dominican Republic", "Mexico", "Cuba"],
    correctOption: "Dominican Republic",
  },
  {
    id: 3,
    questionText: "What is the country with the largest number of islands?",
    options: ["Finland", "Philippines", "Australia", "Norway"],
    correctOption: "Norway",
  },
  {
    id: 4,
    questionText: "What is the oldest airline in the world?",
    options: ["Avianca", "Qantas", "KLM", "Aeroflot"],
    correctOption: "KLM",
  },
  {
    id: 5,
    questionText: "What’s the national animal of Australia?",
    options: ["Red Kangaroo", "Shark", "Koala", "Snake"],
    correctOption: "Red Kangaroo",
  },
  {
    id: 6,
    questionText: "Until 1923, what was the Turkish city of Istanbul called?",
    options: ["Constantinople", "Adrianople", "Kars", "Trabzon"],
    correctOption: "Constantinople",
  },
  {
    id: 7,
    questionText: "What’s the smallest country in the world?",
    options: ["The Vatican", "Lesotho", "Eswatini", "Jamaica"],
    correctOption: "The Vatican",
  },
];

export default quizData;
