import React, { useState } from 'react';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Profile.css';
import states from "./states.json";
import 'semantic-ui-css/semantic.min.css'

import { Dropdown } from 'semantic-ui-react'




toast.configure();


const Profile = () => {

    

    

   
        
    const initialInfoState = {
        UserID: null,
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

      const handleCreate = (e) => {
        console.log(info.UserID)//test
        const currentID = '10000'
        e.preventDefault();
        info.UserID = currentID + 1;//test
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

      const handleUSStateChange = (event, {result}) => {
        const {name,value} = event.target;
        setInfo({ ...info, [name]: value });
      console.log(value, name)
        };
     
      const saveInfo = () => {
        var data = {
            FullName: info.FullName,    
            Address1: info.Address1,
            Address2: info.Address2,
            City: info.City,
            USState: info.USState,
            ZipCode: info.ZipCode
        };
    
        console.log(info.UserID + " " +
                    info.FullName + " " +
                    info.Address1 + " " +
                    info.Address2 + " " +
                    info.City + " " +
                    info.USState + " " +
                    info.ZipCode)

        


        toast("Client Profile Created Successfully!");
      };

    return (
        <div>
             
          <div className="form"> 
             <div className = "img3">
                <h1 className="title">Client Profile</h1>
                  
                  <div className="client-form">

                    <input
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
                      
                    <input
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
              
                    <input
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
                          
                    <input
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
                            
                            <Dropdown
                              
                              
                              className="form2"
                              placeholder='Select State'
                              search
                              value={info.USState}
                              options={states}
                              
                              type="text"
                              
                              onChange={handleUSStateChange}
                              disabled={!edit}
                            />
                    
                                                    
                    <input
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

                  
                  
                  {info.UserID === null ? (
                    
                    <div className="btn-container" >
                      <button onClick={handleCreate} className="btn-save">Create Profile</button>
                    </div>
                      ) : edit === true ? (<div className="btn-container" >
                      <button onClick={handleSave} className="btn-save">Save Profile</button>
                    </div>) : (
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