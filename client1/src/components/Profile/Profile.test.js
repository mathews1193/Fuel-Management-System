import { fireEvent, screen, getByTestId, hasInputValue, render } from '@testing-library/react';
import Profile from './Profile';
import * as axios from "axios";

// test case for checking if a input for gallons requested is rendered
describe("Input Component", () => {


    it("full name renders", () => {
        const { getByTestId } = render(<Profile />);
        
        expect(getByTestId("testFullName")).toBeTruthy();
    });
    it("address1 renders", () => {
        const { getByTestId } = render(<Profile />);
        
        expect(getByTestId("testAddress1")).toBeTruthy();
    });
    it("address2 renders", () => {
        const { getByTestId } = render(<Profile />);
        
        expect(getByTestId("testAddress2")).toBeTruthy();
    });
    it("city renders", () => {
        const { getByTestId } = render(<Profile />);
        
        expect(getByTestId("testCity")).toBeTruthy();
    });
    it("state renders", () => {
        const { getByTestId } = render(<Profile />);
       
        expect(getByTestId("testUSState")).toBeTruthy();
    });
    it("zip code renders", () => {
        const { getByTestId } = render(<Profile />);
        
        expect(getByTestId("testZipCode")).toBeTruthy();
    });
    it("full name updates on change", () => {
        const{getByTestId} = render(<Profile />);
        const fullNameInput = getByTestId("testFullName");
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        expect(fullNameInput.value).toBe("test")
    })
    it("address1 updates on change", () => {
        const{getByTestId} = render(<Profile />);
        const address1Input = getByTestId("testAddress1");
        fireEvent.change(address1Input, {target: {value: "test"}})
        expect(address1Input.value).toBe("test")
    })
    it("address2 updates on change", () => {
        const{getByTestId} = render(<Profile />);
        const address2Input = getByTestId("testAddress2");
        fireEvent.change(address2Input, {target: {value: "test"}})
        expect(address2Input.value).toBe("test")
    })
    it("city updates on change", () => {
        const{getByTestId} = render(<Profile />);
        const cityInput = getByTestId("testCity");
        fireEvent.change(cityInput, {target: {value: "test"}})
        expect(cityInput.value).toBe("test")
    })
    it("USstate calls handleChange", () => {
        const handleChange = jest.fn();
        const{getByTestId} = render(<Profile handleChange={handleChange} />);
        const USstateInput = getByTestId("testUSState");
        fireEvent.change(USstateInput)
        expect(handleChange).not.toHaveBeenCalled()
    })
    it("Zipcode updates on change", () => {
        const{getByTestId} = render(<Profile />);
        const ZipCodeInput = getByTestId("testZipCode");
        fireEvent.change(ZipCodeInput, {target: {value: "11111"}})
        expect(ZipCodeInput.value).toBe("11111")
    })   


});
describe("Button Component", () => {
    
    it("create triggers handleCreate", () =>{
        const handleCreate = jest.fn();
        render(<Profile handleCreate={handleCreate}/>)
        fireEvent.click(screen.getByTestId("create"))
        expect(handleCreate).not.toHaveBeenCalledTimes(1)
    })
   


});
