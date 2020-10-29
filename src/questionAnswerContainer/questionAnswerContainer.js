import { useState, useEffect } from "react";
import AnswerCard from "./answerCard/answerCard";

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

    console.log(enable)
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

    const renderButtons = () => {
        if(props.currentQuestionCounter == 10 && !enable ) return <button onClick={props.showResults}>submit</button>
        
        if(!enable ) return <button onClick={handleNextClick}>next</button>
    }

    return (
        <div>
            {props.question}
            <br />
            {renderCorrectAnswerCard()}
            <br />
            {renderWrongAnswerCards()}
            <br />
            {props.index}
            {renderButtons()}
        </div>
    );
};

export default QuestionAnswerContainer;
