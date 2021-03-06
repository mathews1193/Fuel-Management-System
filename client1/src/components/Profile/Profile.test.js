import { fireEvent,act, screen, cleanup,  render } from '@testing-library/react';
import Profile from './Profile';
import React from 'react'



afterEach(cleanup)
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
        const handleChange = jest.fn()
        const{getByTestId} = render(<Profile handleChange={handleChange}/>);
        expect(screen.getByTestId("testUSState")).toBeTruthy()
        fireEvent.click(getByTestId('testUSState'))
        fireEvent.click(screen.getByText('Alaska'))
        expect(handleChange).toBeTruthy()
        
    })
    it("Zipcode updates on change", () => {
        const{getByTestId} = render(<Profile />);
        const ZipCodeInput = getByTestId("testZipCode");
        fireEvent.change(ZipCodeInput, {target: {value: "11111"}})
        expect(ZipCodeInput.value).toBe("11111")
    })
    it("Zipcode error", async() => {
        const formValidation = jest.fn();
        const{ getByTestId} = render(<Profile formValidation = {formValidation} />);
        const ZipCodeInput = getByTestId("testZipCode");
        
        await act( async () => {
            fireEvent.change(ZipCodeInput, {target: {value: "111111"}})
            
            
            expect(formValidation).toBeTruthy();
    })
})
  


});
describe("Button Component", () => {
    
    it("create triggers handleCreate", () =>{
        const handleCreate = jest.fn();
        const{getByTestId} = render(<Profile handleCreate={handleCreate}/>)
        
        expect(handleCreate).toBeTruthy()
    })
    it("edit triggers handleEdit", () =>{
        const handleEdit = jest.fn();
        const{getByTestId} = render(<Profile handleEdit={handleEdit}/>)
        const FullName = getByTestId('testFullName')
        fireEvent.change(FullName, {target: {value: "test"}})
        fireEvent.change(getByTestId('testAddress1'), {target: {value: "test"}})
        fireEvent.change(getByTestId('testCity'), {target: {value: "test"}})
        fireEvent.click(getByTestId('testUSState'))
        fireEvent.click(screen.getByText('Alaska'))
        fireEvent.change(getByTestId('testZipCode'), {target: {value: "11111"}})
        
        
        expect(handleEdit).toBeTruthy()
    })
    it("save triggers handleSave", () =>{
        const handleSave = jest.fn();
        const{getByTestId} = render(<Profile handleEdit={handleSave}/>)
        const FullName = getByTestId('testFullName')
        fireEvent.change(FullName, {target: {value: "test"}})
        fireEvent.change(getByTestId('testAddress1'), {target: {value: "test"}})
        
        
        expect(handleSave).toBeTruthy()
    })
    

    
   


});


