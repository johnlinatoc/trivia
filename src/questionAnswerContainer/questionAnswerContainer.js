import { useState } from "react";
import AnswerCard from "./answerCard/answerCard";
import {shuffleQuestions} from '../utils/ArrayUtils'

const styles = require("./questionAnswerContainer.module.scss");

const QuestionAnswerContainer = (props) => {
    const [enable, setEnable] = useState(true);
    const [correctClicked, setCorrectClicked] = useState(false)

    const incrementCorrctCounter = (e) => {
        setEnable(false);
        e.target.id === 'correct' && setCorrectClicked(true);
    };

    const handleNextClick = () => {
        correctClicked && props.incrementCorrctCounter()
        setCorrectClicked(false)
        props.incrementCounter();
        setEnable(true);
    }

    const renderCorrectAnswerCard = () => {
        const correctAnswer = props.answers[1];

        return (
            <AnswerCard
                id="correct"
                correct={true}
                enable={enable}          
                answer={correctAnswer}
                incrementCorrctCounter={e=>{incrementCorrctCounter(e)}}
            />
        );
    };
    const renderWrongAnswerCards = () => {
        const wrongAnswers = props.answers[0];

        return wrongAnswers.map((wrongAnswer) => {
            return (
                <AnswerCard
                    id="false"
                    correct={false}
                    enable={enable}
                    answer={wrongAnswer}
                    incrementCorrctCounter={e=>{incrementCorrctCounter(e)}}
                />
            );
        });
    };

    const renderAllAnswers = () => {
       return  [...renderWrongAnswerCards(), renderCorrectAnswerCard()];
    }

    const renderButtons = () => {
        if(props.currentQuestionCounter === 10 && !enable ) return <button className={styles.button} onClick={props.showResults}>submit</button>
        
        if(!enable ) return <button className={styles.button}onClick={handleNextClick}>next</button>
    }

    return (
        <div className={styles.questionAnswerContainer}>
            <h1 className={styles.question}>Question {props.currentQuestionCounter} of 10<br/>{props.question}</h1>
            <h2 className={styles.answerResult}>
            {correctClicked && !enable ? "Correct!" : !correctClicked && !enable ? "Sorry, incorrect" : null}
            </h2>
            <div className={styles.allAnswers}>
            {renderAllAnswers()}
            </div>
            <div className={styles.buttonContainer}>
            {renderButtons()}
            </div>
        </div>
    );
};

export default QuestionAnswerContainer;
