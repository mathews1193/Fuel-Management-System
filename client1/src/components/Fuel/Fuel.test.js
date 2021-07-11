import { render } from '@testing-library/react';
import Fuel from './Fuel';

describe("Input Component", () => {
    it("rendered input", () => {
        const { getByTestId } = render(<Fuel />);
        const input = getByTestId("fuel");
        expect(input).toBeTruthy();
    });
});