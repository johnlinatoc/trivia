import { useEffect, useState } from "react";
import QuestionAnswerContainer from "./questionAnswerContainer/questionAnswerContainer";
import ResultsContainer from "./resultsContainer/resultsContainer";
import { shuffleQuestions } from "./utils/ArrayUtils";
import { uuid } from 'uuidv4';

const styles = require("./App.module.scss");
const questions = require("./utils/test-data/Apprentice_TandemFor400_Data.json");

const App = () => {
  const [data, setData] = useState(null);
  const [correctNum, setCorrectNum] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [showResults, setShowResults] = useState(false);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(questions);
    setData(shuffledQuestions.splice(0, 10));
  }, []);

  const incrementCounter = () => {
    setQuestionCounter(questionCounter + 1);
  };

  const incrementCorrctCounter = () => {
    setCorrectNum(correctNum + 1);
  };

  const renderQuestionAnswerContainers = (data) => {
    return data.map((singleQuestionAnswer) => {
      return (
        <QuestionAnswerContainer
          key={uuid()}
          question={singleQuestionAnswer.question}
          answers={[
            singleQuestionAnswer.incorrect,
            singleQuestionAnswer.correct,
          ]}
          incrementCounter={incrementCounter}
          incrementCorrctCounter={incrementCorrctCounter}
          currentQuestionCounter={questionCounter}
          showResults={handleResultsRender}
        />
      );
    })[questionCounter - 1];
  };

  const handleResultsRender = () => {
    setShowResults(!showResults);
  };

  const handleResetGame = () => {
    setStartGame(false);
    setCorrectNum(0);
    setQuestionCounter(1);
    setData(shuffleQuestions(questions).splice(0, 10));
  };

  return (
    <div 
    data-testid='app'
    className={styles.app}>
      {!startGame && (
        <div className={styles.starterScreen}>
        <h1>Welcome</h1>
        <button 
        data-testid="start-button"
        onClick={() => setStartGame(true)}>Start Game</button>
        </div>
      )}
      {data &&
        !showResults &&
        startGame &&
        renderQuestionAnswerContainers(data)}
      {showResults && (
        <ResultsContainer
          key={uuid()}
          results={correctNum}
          showResults={handleResultsRender}
          restartGame={handleResetGame}
        />
      )}
    </div>
  );
};

export default App;
