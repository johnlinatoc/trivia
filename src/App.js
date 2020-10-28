import {useEffect, useState} from 'react';
import QuestionAnswerContainer from './questionAnswerContainer/questionAnswerContainer';

const styles = require("./App.module.scss");
const questions = require("./data/Apprentice_TandemFor400_Data.json");

const App = () => {
  const [data, setData] = useState(null);
  const [correctNum, setCorrectNum] = useState(0);

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

  const renderQuestionAnswerContainer = data => {
    return data.map(singleQuestionAnswer => {
      return <QuestionAnswerContainer 
        question={singleQuestionAnswer.question}
        answers={[singleQuestionAnswer.incorrect, singleQuestionAnswer.correct]}/>
    })
  }

  const incrementCounter = () => {
    //increment counter
  }

  console.log(data)
  return (
    <div className={styles.app}>
      <h1>Welcome</h1>
      {data && renderQuestionAnswerContainer(data)}
    </div>
  );
}

export default App;
