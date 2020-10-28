const styles = require("./answerCard.module.scss");

const AnswerCard = (props) => {
    const handleStyle = () => {
        if (props.enable) {
            return styles.default;
        }

        return props.correct ? styles.correct : styles.wrong;
    };

    return (
        <>
            <button className={handleStyle()} onClick={props.handleClick}>
                {props.answer}
            </button>
            <br />
        </>
    );
};

export default AnswerCard;
