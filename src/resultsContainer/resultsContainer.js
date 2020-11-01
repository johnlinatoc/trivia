const ResultsContainer = (props) => {
    const handleClick = () => {
        props.restartGame();
        props.showResults();
    }
    
    return(<div>
        <div>
        You answered {props.results} out of 10 correct!
        </div>
        <button onClick={handleClick}>Return To Homescreen</button>
    </div>)
}

export default ResultsContainer;