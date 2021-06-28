import React, { useState } from 'react';
import SelectUSState from '../USstatePicker/USstatePicker'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Profile.css';
import {FormGroup,Input,Col} from 'reactstrap';

toast.configure();

const Profile = () => {

    let [USState, setUSState] = useState('');

    const handleUSStateChange = (e) => {
        setUSState(e.target.value);
        };

    const initialInfoState = {
        id: null,
        FullName: '',
        Address1: '',
        Address2: '',
        City:'',
        State:'',
        ZipCode:''
      };
      const [info, setInfo] = useState(initialInfoState);
    
      //we will use edit state to determine which button to show
      const [edit, setEdit] = useState(true);
    
      const handleSave = (e) => {
        e.preventDefault();
        saveInfo();
        //set edit to false when save is clicked
        setEdit(false);
      };
      
      const handleEdit = (e) => {
        e.preventDefault();
        //set edit to true when edit is clicked
        setEdit(true);
      };
      
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInfo({ ...info, [name]: value });
      };
     
      const saveInfo = () => {
        var data = {
            FullName: info.FullName,    
            Address1: info.Address1,
            Address2: info.Address2,
            City: info.City,
            USState: USState,
            ZipCode: info.State
        };
    
        console.log(info.FullName + " " +
                    info.Address1 + " " +
                    info.Address2 + " " +
                    info.City + " " +
                    USState + " " +
                    info.ZipCode)

        toast("Client Profile Created Successfully!");
      };

    return (
        <div>
             
          <div className="form"> 
             <div className = "img3">
                <h1 className="title">Client Profile</h1>
                  
                  <div className="client-form">

                    <Input
                      className="form1"
                      id="FullName"
                      required
                      value={info.FullName}
                      onChange={handleInputChange}
                      type="text"
                      name="FullName"
                      placeholder="Full Name"
                      disabled={!edit}
                    />        
                      
                    <Input
                      className="form1"
                      id="Address1"
                      required
                      value={info.Address1}
                      onChange={handleInputChange}
                      type="text"
                      name="Address1"
                      placeholder="Address line 1"
                      disabled={!edit}
                    />
              
                    <Input
                      className="form1"
                      id="Address2"
                      required
                      value={info.Address2}
                      onChange={handleInputChange}
                      type="text"
                      name="Address2"
                      placeholder="Address line 2"
                      disabled={!edit}
                    />
                          
                    <Input
                      className="form1"
                      id="City"
                      required
                      value={info.City}
                      onChange={handleInputChange}
                      type="text"
                      name="City"
                      placeholder="City"
                      disabled={!edit}
                    />
                            
                    <SelectUSState
                      className= "form2"
                      id="State" 
                      required   
                      value={info.State}
                      onChange={(State) =>handleUSStateChange(State)}
                      type="text"
                      name="state"
                      placeholder="select state"
                      disabled={!edit}
                    />
                                                    
                    <Input
                      className="form1"
                      id="ZipCode"
                      required
                      value={info.ZipCode}
                      onChange={handleInputChange}
                      type="text"
                      name="ZipCode"
                      placeholder="ZipCode"
                      disabled={!edit}
                    />
 
                  </div>

                  {edit === true ? (
                    <div className="btn-container" >
                      <button onClick={handleSave} className="btn-save">Create Profile</button>
                    </div>
                      ) : (
                    <div className="btn-container" >
                      <button onClick={handleEdit} className="btn-edit">Edit Profile</button>
                    </div>
                  )}

            </div>
          </div>
        </div>
    )
}
export default Profile