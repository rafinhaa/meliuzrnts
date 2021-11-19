import React from "react";
import { render, fireEvent  } from "@testing-library/react-native";

import Hello from "../index";

describe('Switch de testes do componente Hello', () => {

    test('este é o meu primeiro teste', () => {
        const { getByTestId } = render(<Hello />);
        const textElement = getByTestId('hello');
        expect(textElement).toBeTruthy();
    });

    test('este é o meu segundo teste', () => {
        const { getByTestId } = render(<Hello />);
        const textElement = getByTestId('hello');
        expect(textElement.props.children).toEqual('Hello');
    });
    
    test('este é o meu terceiro teste', () => {
        const { getByPlaceholderText } = render(<Hello />);
        const textElement = getByPlaceholderText('Informe seu nome');
        fireEvent.changeText(textElement, 'Rafael');
        expect(textElement.props.value).toEqual('Rafael');
    });

    test('este é o meu quarto teste', () => {
        const { getByPlaceholderText } = render(<Hello />);
        const textElement = getByPlaceholderText('Digite algo...');
        fireEvent.changeText(textElement, '22');
        expect(textElement.props.value).toEqual('22');
    });

    test('este é o meu quinto teste', () => {
        const { getByTestId } = render(<Hello />);
        const myFirstButton = getByTestId('button');
        fireEvent.press(myFirstButton);
        const displayName = getByTestId('name');
        const displayAge = getByTestId('age');
        expect(displayName).toBeTruthy();
        expect(displayAge).toBeTruthy();
    });
});
