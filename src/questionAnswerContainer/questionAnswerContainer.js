import { useState } from "react";
import AnswerCard from "./answerCard/answerCard";

const styles = import('./questionAnswerContainer.module.scss')

const QuestionAnswerContainer = props => {
    const allAnswers = props.answers;
    const wrongAnswers = allAnswers[0];
    const correctAnswer = allAnswers[1];
    const [enable, setEnable] = useState(true);

    const handleAnswerClick = () => {
        setEnable(false);
    };

    const renderCorrectAnswerCard = () => {
        return  <AnswerCard correct={true} enable={enable} answer={correctAnswer} handleClick={handleAnswerClick}/>
    }
    const renderWrongAnswerCards = () => {
        return wrongAnswers.map(wrongAnswer => {
            return <AnswerCard correct={false} enable={enable} answer={wrongAnswer} handleClick={handleAnswerClick}/>
        })
    }

    return(
    <>{props.question}<br/>{renderCorrectAnswerCard()}<br/>{renderWrongAnswerCards()}<br/>{props.index}</>
    )
}

export default QuestionAnswerContainer;