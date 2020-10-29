const styles = require("./answerCard.module.scss");

const AnswerCard = (props) => {
    const handleStyle = () => {
        if (props.enable) {
            return styles.default;
        }

        return props.correct ? styles.correct : styles.wrong;
    };

    return (
        <div>
            <button id={props.id} className={handleStyle()} onClick={e=>{props.incrementCorrctCounter(e)}}>
                {props.answer}
            </button>
            <br />
        </div>
    );
};

export default AnswerCard;
