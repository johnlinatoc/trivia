import React from 'react';
import { render } from '@testing-library/react';
import AnswerCard from './answerCard'

const incrementCorrctCounterMock = jest.fn();

describe("The AnswerCard component", () => {
    it("should render <AnswerCard/>", () => {
        const {getByTestId} = renderAnswerCard();
        const answer = getByTestId('answer')

        expect(answer).toBeDefined();
        expect(answer.innerHTML).toBe('any answer')
    })
})

const renderAnswerCard = () => {
    return render(<AnswerCard
        id="correct"
        key='1'
        data-testid="answer"
        correct={true}
        enable={true}
        answer="any answer"
        incrementCorrctCounter={incrementCorrctCounterMock}
    />);
}