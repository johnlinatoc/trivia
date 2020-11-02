import { render, fireEvent } from '@testing-library/react';
import ResultsContainer from './resultsContainer'

const showResultsMock = jest.fn();
const restartGameMock = jest.fn();

describe("The ResultsContainer component", ()=>{

    it("should render <ResultsContainer />", ()=>{
        const {getByTestId} = renderResultsContainer();

        expect(getByTestId('results')).toBeDefined();
    })

    it("should display user's score", ()=>{
        const {container} = renderResultsContainer();

        expect(container.innerHTML).toContain('You answered 9 out of 10 correct')
    })

    it('should restart game when button is clicked', ()=>{
        const {getByTestId} = renderResultsContainer();
        const button = getByTestId('return-button')
        fireEvent.click(button)

        expect(restartGameMock).toHaveBeenCalled();
    })
}) 

const renderResultsContainer = () => {
    return render(<ResultsContainer 
        key='1'
        results='9'
        showResults={showResultsMock}
        restartGame={restartGameMock}
    />);
}
