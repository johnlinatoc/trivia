import { useState } from "react";
import AnswerCard from "./answerCard/answerCard";
import {shuffleQuestions} from '../utils/ArrayUtils'

const styles = import("./questionAnswerContainer.module.scss");

const QuestionAnswerContainer = (props) => {
    const allAnswers = props.answers;
    const wrongAnswers = allAnswers[0];
    const correctAnswer = allAnswers[1];
    const [enable, setEnable] = useState(true);

    const incrementCorrctCounter = (e) => {
        setEnable(false);
        e.target.id === 'correct' && props.incrementCorrctCounter();
    };

    const handleNextClick = () => {
        setEnable(true);
        props.incrementCounter();
    }

    const renderCorrectAnswerCard = () => {
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
       const allAnswers =  [...renderWrongAnswerCards(), renderCorrectAnswerCard()];
       return shuffleQuestions(allAnswers)
    }

    const renderButtons = () => {
        if(props.currentQuestionCounter === 10 && !enable ) return <button onClick={props.showResults}>submit</button>
        
        if(!enable ) return <button onClick={handleNextClick}>next</button>
    }

    return (

        <div>
            {props.question}
            {renderAllAnswers()}
            {renderButtons()}
        </div>
    );
};

export default QuestionAnswerContainer;
