import { fireEvent, getByTestId, hasInputValue, render } from '@testing-library/react';
import Profile from './Profile';

// test case for checking if a input for gallons requested is rendered
describe("Input Component", () => {

    it("full name renders", () => {
        const { getByTestId } = render(<Profile />);
        const input1 = getByTestId("testFullName");
        expect(input1).toBeTruthy();
    });
    it("address1 renders", () => {
        const { getByTestId } = render(<Profile />);
        const input2 = getByTestId("testAddress1");
        expect(input2).toBeTruthy();
    });
    it("address2 renders", () => {
        const { getByTestId } = render(<Profile />);
        const input3 = getByTestId("testAddress2");
        expect(input3).toBeTruthy();
    });
    it("city renders", () => {
        const { getByTestId } = render(<Profile />);
        const input4 = getByTestId("testCity");
        expect(input4).toBeTruthy();
    });
    it("state renders", () => {
        const { getByTestId } = render(<Profile />);
        const input5 = getByTestId("testUSState");
        expect(input5).toBeTruthy();
    });
    it("zip code renders", () => {
        const { getByTestId } = render(<Profile />);
        const input6 = getByTestId("testZipCode");
        expect(input6).toBeTruthy();
    });
    

});



