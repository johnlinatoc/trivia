import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionAnswerContainer from './questionAnswerContainer'

const questions = require("../utils/test-data/Apprentice_TandemFor400_Data.json");

const incrementCounterMock=jest.fn();
const incrementCorrectCounterMock=jest.fn();
const showResultsMock=jest.fn();

describe("The QuestionAnswerContainer component", ()=>{

    it("should display options one at a time", ()=>{
        const {getAllByTestId} = renderQuestionAnswerContainer();
        const answers = getAllByTestId('answer');

        expect(answers.length).toBe(4);
        expect(answers[0].innerHTML).not.toEqual(answers[1].innerHTML)
        expect(answers[0].innerHTML).not.toEqual(answers[2].innerHTML)
        expect(answers[0].innerHTML).not.toEqual(answers[3].innerHTML)
    })

    it("should reveal correct answer after selecting an option", ()=>{
        const {getAllByTestId} = renderQuestionAnswerContainer();
        const answers = getAllByTestId('answer');
        fireEvent.click(answers[0])

        expect(answers[0].className).toBe('wrong');
        expect(answers[1].className).toBe('wrong');
        expect(answers[2].className).toBe('wrong');
        expect(answers[3].className).not.toBe('wrong')
        expect(answers[3].className).toBe('correct')
    })
    
}) 

const renderQuestionAnswerContainer = () => {
    return render(<QuestionAnswerContainer 
    key={'key'}
    question={questions[0].question}
    answers={[questions[0].incorrect,
    questions[0].correct]}
    incrementCounter={incrementCounterMock}
    incrementCorrectCounter={incrementCorrectCounterMock}
    currentQuestionCounter={1}
    showResults={showResultsMock}
    />);
}