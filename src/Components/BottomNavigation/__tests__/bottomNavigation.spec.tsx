import React from 'react';
import * as redux from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import BottomNavigation from '..';

describe('bottomNavigation test', () => {  
  it('redering elements', () => {
        const { getByTestId } = render(<BottomNavigation />);
        const homeButton = getByTestId('home-button');
        fireEvent.press(homeButton);
        expect(getByTestId('image-home')).toBeTruthy();
    })

    it('redering elements list', () => {
        const dispatchSpyComponent = jest.spyOn(redux, 'useDispatch');
        const dispatchFn = jest.fn();
        dispatchSpyComponent.mockReturnValue(dispatchFn);
        const { getByTestId } = render(<BottomNavigation />);
        const listButton = getByTestId('list-button');
        fireEvent.press(listButton);
        expect(getByTestId('map-component')).toBeTruthy();
    })
})