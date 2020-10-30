const ResultsContainer = (props) => {
    const handleClick = () => {
        props.restartGame();
        props.showResults();
    }
    
    return(<div>
        {props.results}
        <button onClick={handleClick}>Return To Homescreen</button>
    </div>)
}

export default ResultsContainer;