import {useEffect, useState} from 'react';
import QuestionsContainer from './questionsContainer/questionsContainer';

const styles = require("./App.module.scss");
const questions = require("./data/Apprentice_TandemFor400_Data.json");

const App = () => {
  const [data, setData] = useState(null)

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

  return (
    <div className={styles.app}>
      <h1>Welcome</h1>
      {<QuestionsContainer data={data}/>}
    </div>
  );
}

export default App;
