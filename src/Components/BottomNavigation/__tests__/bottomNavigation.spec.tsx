import React from "react";

import { render } from '@testing-library/react-native'
import BottomNavigation from "..";

describe('BottomNavigation test', () => {
    it('redering elements', () => {
        const { getAllByLabelText } = render(<BottomNavigation />);
        expect(getAllByLabelText('Home').length).toBe(1);
    });
});