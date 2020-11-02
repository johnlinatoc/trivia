import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe("The App component", ()=>{
    it("should render <App/>", ()=>{
        const {getByTestId} = renderApp();

        expect(getByTestId("app")).toBeDefined();
    })

    it("should render correct title", ()=>{
        const {getByText} = renderApp();

        expect(getByText('Welcome')).toBeInTheDocument();
    })

    it("should render first question when game started", ()=>{
        const {getByTestId} = renderApp();
        const startButton = getByTestId('start-button');
        fireEvent.click(startButton);

        expect(getByTestId('question-answer-container')).toBeInTheDocument();
        expect(getByTestId('question')).toBeInTheDocument();
    })

}) 

const renderApp = () => {
    return render(<App/>);
}