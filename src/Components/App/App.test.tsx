jest.mock('./hooks.ts');

import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { useQueryRestaurantData } from './hooks';
import { getFallBackRestaurantData } from './../../API/fallbackRestaurantData'; 
import App from './App';


describe('Integration Tests', () => {
    beforeEach(() => {
        (useQueryRestaurantData as jest.Mock).mockReturnValue(getFallBackRestaurantData());
    });

    describe('when adding a custom search filter', () => {
        it('should add that filter to the UI and be deletable', async () => {
            const { getByPlaceholderText, getByText } = render(<App />);
            const Input = getByPlaceholderText('Add filter here:');
            const AddFilterButton = getByText('Add Filter');

            fireEvent.focus(Input);
            fireEvent.change(Input, { target: { value: 'cheese' } });
            fireEvent.click(AddFilterButton);

            const expectedComponent = screen.getByText('Rocco\'s Cheesecake');
            const expectedFilterElement = screen.getByText('cheese');

            expect(expectedComponent).toBeInTheDocument();
            expect(expectedFilterElement).toBeInTheDocument();

            const removeFilterElement = screen.getByText('X');

            fireEvent.click(removeFilterElement);

            expect(screen.queryByText('cheese')).toBeNull();

            // Filters are cleared
            const clearedFiltersExpectedComponent = screen.getByText('A Chef\'s Kitchen');

            expect(clearedFiltersExpectedComponent).toBeInTheDocument();
        });
    });
});