import { render } from '@testing-library/react';
import Fuel from './Fuel';

// test case for checking if a input for gallons requested is rendered
describe("Input Component", () => {

    it("rendered input", () => {
        const { getByTestId } = render(<Fuel />);
        const input = getByTestId("fuel");
        expect(input).toBeTruthy();
    });


});