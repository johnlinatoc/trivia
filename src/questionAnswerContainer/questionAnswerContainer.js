import { useState } from "react";
import AnswerCard from "./answerCard/answerCard";

const styles = import("./questionAnswerContainer.module.scss");

const QuestionAnswerContainer = (props) => {
    const allAnswers = props.answers;
    const wrongAnswers = allAnswers[0];
    const correctAnswer = allAnswers[1];
    const [enable, setEnable] = useState(true);

    const handleAnswerClick = (e) => {
        setEnable(false);
        props.incrementCounter();
        e.target.id === 'correct' && props.incrementCorrctCounter();
    };


    const renderCorrectAnswerCard = () => {
        return (
            <AnswerCard
                id="correct"
                correct={true}
                enable={enable}
                answer={correctAnswer}
                handleClick={e=>{handleAnswerClick(e)}}
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
                    handleClick={e=>{handleAnswerClick(e)}}
                />
            );
        });
    };

    return (
        <div>
            {props.question}
            <br />
            {renderCorrectAnswerCard()}
            <br />
            {renderWrongAnswerCards()}
            <br />
            {props.index}
            {props.questionCounter == 10 ? <button>submit</button> : null}
        </div>
    );
};

export default QuestionAnswerContainer;
