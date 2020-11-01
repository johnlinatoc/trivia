const styles = require("./resultsContainer.module.scss");

const ResultsContainer = (props) => {
  const handleClick = () => {
    props.restartGame();
    props.showResults();
  };

  return (
    <div className={styles.results}>
      <h1>You answered {props.results} out of 10 correct!</h1>
      <button onClick={handleClick}>Return To Homescreen</button>
    </div>
  );
};

export default ResultsContainer;
