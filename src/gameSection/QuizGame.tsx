import React, { useState } from "react";
import "./QuizGame.css";

// Quiz categories and questions
type QuizCategory = "Health & Restaurant" | "Shopping & Retail" | "Subscriptions & Streaming";

type QuizQuestion = {
  category: QuizCategory;
  question: string;
  answer: boolean | string;
};
const questions: QuizQuestion[] = [
  { category: "Health & Restaurant", question: "Do you spend a lot at fast food?", answer: false },
  { category: "Shopping & Retail", question: "Buying something just because it's on sale is smart.", answer: false },
  { category: "Subscriptions & Streaming", question: "You should keep all your streaming services active for convenience.", answer: false },
];

const QuizGame: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(
    questions[Math.floor(Math.random() * questions.length)]
  );
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleAnswer = (userAnswer: boolean) => {
    if (userAnswer === currentQuestion.answer) {
      setFeedback("✅ Correct! Good spending habit!");
    } else {
      setFeedback("❌ Incorrect! Try to make better choices.");
    }
    setTimeout(() => {
      setFeedback(null);
      setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
    }, 1500);
  };

  if (!gameStarted) {
    return (
      <main className="main-content" style={{ backgroundColor: '#e6f3ff' }}>
        <div className="quiz-container">
          <div className="pixel-art-decorations">
            <div className="pixel-plant left-plant"></div>
            <div className="pixel-plant right-plant"></div>
            <div className="pixel-coffee left-coffee"></div>
            <div className="pixel-coffee right-coffee"></div>
            <div className="pixel-envelopes top-envelope"></div>
            <div className="pixel-envelopes bottom-envelope"></div>
          </div>
          <div className="game-content">
            <h1 className="retro-title" style={{ backgroundColor: '#F1FAF7' }}>Don't Waste Money!</h1>
            <div className="retro-card">
              <div className="card-content">
                <h2>A Game About Smart Spending</h2>
                <p>Test your knowledge about financial decisions and learn to save money wisely.</p>
                <button 
                  className="enter-button"
                  onClick={() => setGameStarted(true)}
                >
                  ENTER
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content">
      <div className="quiz-container">
        <div className="pixel-art-decorations">
          <div className="pixel-plant left-plant"></div>
          <div className="pixel-plant right-plant"></div>
          <div className="pixel-coffee left-coffee"></div>
          <div className="pixel-coffee right-coffee"></div>
          <div className="pixel-envelopes top-envelope"></div>
          <div className="pixel-envelopes bottom-envelope"></div>
        </div>
        <div className="game-content">
          <div className="retro-card quiz-active">
            <h2 className="category-title">{currentQuestion.category}</h2>
            <div className="question-box">
              <p>{currentQuestion.question}</p>
            </div>
            <div className="retro-buttons">
              <button
                className="quiz-button true-button"
                onClick={() => handleAnswer(true)}
              >
                True
              </button>
              <button
                className="quiz-button false-button"
                onClick={() => handleAnswer(false)}
              >
                False
              </button>
            </div>
            {feedback && (
              <div className={`feedback-box ${feedback.includes('Correct') ? 'correct' : 'incorrect'}`}>
                {feedback}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default QuizGame;
