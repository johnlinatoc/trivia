import {useEffect, useState} from 'react';
import QuestionAnswerContainer from './questionAnswerContainer/questionAnswerContainer';

const styles = require("./App.module.scss");
const questions = require("./data/Apprentice_TandemFor400_Data.json");

const App = () => {
  const [data, setData] = useState(null);
  const [correctNum, setCorrectNum] = useState(0);
  const [questionCounter, setQuestionCounter] = useState(0)

  const shuffleQuestions = questions => {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
}

  useEffect(()=>{
    const shuffledQuestions = shuffleQuestions(questions);
    setData(shuffledQuestions.splice(0,10));
  }, [])

  const incrementCounter = () => {
    setQuestionCounter(questionCounter + 1);
  }

  const incrementCorrctCounter = () => {
    setCorrectNum(correctNum + 1)
  }

  const renderQuestionAnswerContainers = data => {
    return data.map(singleQuestionAnswer => {
      return <QuestionAnswerContainer 
        question={singleQuestionAnswer.question}
        answers={[singleQuestionAnswer.incorrect, singleQuestionAnswer.correct]}
        incrementCounter={incrementCounter}
        incrementCorrctCounter={incrementCorrctCounter}
        questionCounter={questionCounter}/>
    })
  }

  return (
    <div className={styles.app}>
      <h1>Welcome</h1>
      {data && renderQuestionAnswerContainers(data)}
    </div>
  );
}

export default App;
