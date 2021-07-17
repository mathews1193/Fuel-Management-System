import { render } from '@testing-library/react';
import Fuel from './Fuel';

// test case for checking if a input for gallons requested is rendered
describe("Input Component", () => {

    it("rendered gallons input", () => {
        const { getByTestId } = render(<Fuel />);
        const input = getByTestId("fuel");
        expect(input).toBeTruthy();
    });
});

describe("Text Rendered", () => {
    it("Fuel Quote Form", () => {
        const { getByText } = render(<Fuel />);
        const title = getByText("Fuel Quote Form");
        expect(title).toBeTruthy();
    });
});

    


