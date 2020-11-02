import { useState } from "react";
import AnswerCard from "./answerCard/answerCard";
import {shuffleQuestions} from '../utils/ArrayUtils'
import { uuid } from 'uuidv4';

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
                key={uuid()}
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
                    data-testid='incorrect'
                    key={uuid()}
                    correct={false}
                    enable={enable}
                    answer={wrongAnswer}
                    incrementCorrctCounter={e=>{incrementCorrctCounter(e)}}
                />
            );
        });
    };

    const renderAllAnswers = () => {
       return  shuffleQuestions([...renderWrongAnswerCards(), renderCorrectAnswerCard()]);
    }

    const renderButtons = () => {
        if(props.currentQuestionCounter === 10 && !enable ) return <button className={styles.button} onClick={props.showResults}>submit</button>
        
        if(!enable ) return <button className={styles.button}onClick={handleNextClick}>next</button>
    }

    return (
        <div 
        data-testid="question-answer-container"
        className={styles.questionAnswerContainer}>
            <h1 className={styles.questionNum}>Question {props.currentQuestionCounter} of 10</h1>
            <h2 
            data-testid="question"
            className={styles.question}>{props.question}</h2>
            <h2 className={styles.answerResult}>
            {correctClicked && !enable ? "Correct!" : !correctClicked && !enable ? "Sorry, incorrect. This was the correct answer." : null}
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
