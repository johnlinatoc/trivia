import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import QuestionAnswerContainer from './questionAnswerContainer'

const questions = require("../utils/test-data/Apprentice_TandemFor400_Data.json");

const incrementCounterMock=jest.fn();
const incrementCorrectCounterMock=jest.fn();
const showResultsMock=jest.fn();

describe("The QuestionAnswerContainer component", ()=>{
    it("should render <QuestionAnswerContainer/>", ()=>{
        const {getByTestId} = renderQuestionAnswerContainer();

        expect(getByTestId("question-answer-container")).toBeDefined();
    })

    it("should display options one at a time", ()=>{
        const {getAllByTestId} = renderQuestionAnswerContainer();
        const answers = getAllByTestId('answer');

        expect(answers.length).toBe(4);
        expect(answers[0].innerHTML).not.toEqual(answers[1].innerHTML)
        expect(answers[0].innerHTML).not.toEqual(answers[2].innerHTML)
        expect(answers[0].innerHTML).not.toEqual(answers[3].innerHTML)
    })

    it("should reveal correct answer after selecting an option", async ()=>{
        const {getAllByTestId, getByRole} = renderQuestionAnswerContainer();
        let answers = getAllByTestId('answer');
        fireEvent.click(answers[0])
        
        expect((getByRole('button', {name: /Aegri somnia vana/i})).className).toBe('wrong');
        expect((getByRole('button', {name: /Vidi, vini, vici/i})).className).toBe('wrong');
        expect((getByRole('button', {name: /Iacta alea est!/i})).className).toBe('wrong');
        expect((getByRole('button', {name: /Et tu, Brute?/i})).className).toBe('correct');
    })
    
    it("should allow user to only select one option", () => {
        const {getAllByTestId, container} = renderQuestionAnswerContainer();
        const answers = getAllByTestId('answer');
        fireEvent.click(answers[0])

        expect(container.innerHTML).toContain('incorrect')

        fireEvent.click(answers[3])

        expect(container.innerHTML).not.toContain('Correct')
    })
}) 

const renderQuestionAnswerContainer = () => {
    return render(<QuestionAnswerContainer 
    key={'key'}
    question={questions[1].question}
    answers={[questions[1].incorrect,
    questions[1].correct]}
    incrementCounter={incrementCounterMock}
    incrementCorrectCounter={incrementCorrectCounterMock}
    currentQuestionCounter={1}
    showResults={showResultsMock}
    />);
}