import React from 'react';
import { render } from '@testing-library/react';
import QuestionAnswerContainer from './questionAnswerContainer'

describe("The QuestionAnswerContainer component", ()=>{

    it("should display options one at a time", ()=>{})
    it("should allow user to only select one option", ()=>{})
    it("should reveal correct answer after selecting an option", ()=>{})
    it("should render 10 unique questions when game started", ()=>{})
}) 

const renderQuestionAnswerContainer = () => {
    return render(<QuestionAnswerContainer />);
}