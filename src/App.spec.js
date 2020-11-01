import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("The App component", ()=>{
    it("should render correct title", ()=>{
        const {getByText} = renderApp();

        expect(getByText('Welcome')).toBeInTheDocument();
    })

    it("should render 10 unique questions when game started", ()=>{})
}) 

const renderApp = () => {
    return render(<App/>);
}