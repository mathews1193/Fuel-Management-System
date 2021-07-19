import React, { useState, useEffect } from 'react';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Profile.css';
import 'semantic-ui-css/semantic.min.css'
import Axios from 'axios'

import { Dropdown } from 'semantic-ui-react'
import options from './states.js'

toast.configure();

const Profile = () => {
 
  // example for variables 
  const [UserID, setuserId] = useState();
  const [FullName, setFullName] = useState('');
  const [Address1, setAddress1] = useState('');
  const [Address2, setAddress2] = useState('');
  const [City, setCity] = useState('');
  const [USState, setUSState] = useState('');
  const [ZipCode, setZipCode] = useState('');  

    
const [custProfile, setCustProfile] = useState([]);   
  
    
      //we will use edit state to determine which button to show
      const [edit, setEdit] = useState(false);

      const getProfile = (e) => {
        Axios.get("http://localhost:3001/profile").then((response) => {
          setCustProfile(response.data);
          setProfile();
        })
      }
      const setProfile =(e) => {
        custProfile.map((val,key)=>{
          
          return <div>
            
            {setFullName(val.fullName)}
            {setuserId(val.userId)}
            {setAddress1(val.address1)}
            {setAddress2(val.address2)}
            {setCity(val.city)}
            {setUSState(val.USstate)}
            {setZipCode(val.zipCode)}
            {console.log(UserID, FullName, Address1, Address2, City, USState, ZipCode)}
          </div>
        })
      }
      const handleSave = (e) => {

        Axios.put('http://localhost:3001/edit',{
            userId:UserID,
            fullName:FullName,
            address1:Address1,
            address2:Address2,
            city:City,
            USstate:USState,
            zipCode:ZipCode,
        }).then(() => {
            alert("success frontend to backend");
            //set edit to false when save is clicked
            setEdit(false);
            console.log(UserID, FullName, Address1, Address2, City, USState, ZipCode)
        })
       
        toast("Client Profile Saved Successfully!");
      };

      const handleCreate = (e) => {
       
        toast("Client Profile Created Successfully!");
        
        console.log(UserID, FullName, Address1, Address2, City, USState, ZipCode)
        
        Axios.post('http://localhost:3001/insert',{
            userId:UserID,
            fullName:FullName,
            address1:Address1,
            address2:Address2,
            city:City,
            USstate:USState,
            zipCode:ZipCode,
        }).then(() => {
            alert("success frontend to backend");
            //set edit to false when save is clicked
            setEdit(false);

        })
        
      };

      //set edit to true when edit is clicked
      const handleEdit = (e) => {
        setEdit(true);
      };
      
        const handleChange = (e, result) => {
          setUSState(result.value)
        }
        useEffect(()=> getProfile(),[getProfile])
        useEffect(()=> setProfile(),[custProfile, setProfile])
        
        
return (
        <div>
          <div className="form"> 
             <div className = "img3">
              
                <h1 className="title">Client Profile</h1>
                  
                  <div className="client-form">

                    <input
                      className="form1"
                      id="FullName"
                      data-testid="testFullName"
                      required
                      value={FullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      name="FullName"
                      placeholder="Full Name"
                     
                    />        
                      
                    <input
                      className="form1"
                      id="Address1"
                      data-testid="testAddress1"
                      required
                      value={Address1}
                      onChange={(e) => setAddress1(e.target.value)}
                      type="text"
                      name="Address1"
                      placeholder="Address line 1"
                      
                    />
              
                    <input
                      className="form1"
                      id="Address2"
                      data-testid="testAddress2"
                      required
                      value={Address2}
                      onChange={(e) => setAddress2(e.target.value)}
                      type="text"
                      name="Address2"
                      placeholder="Address line 2"
                      
                    />
                          
                    <input
                      className="form1"
                      id="City"
                      data-testid="testCity"
                      required
                      value={City}
                      onChange={(e) => setCity(e.target.value)}
                      type="text"
                      name="City"
                      placeholder="City"
                     
                    />
                            
                            <Dropdown
                              data-testid="testUSState"
                              className="form2"
                              placeholder='Select State'
                              search
                              value={USState}
                              options={options}
                              type="text"
                              
                              onChange={handleChange}
                             
                            />
                    
                                                    
                    <input
                      className="form1"
                      id="ZipCode"
                      data-testid="testZipCode"
                      required
                      value={ZipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      type="text"
                      name="ZipCode"
                      placeholder="ZipCode"
                      
                    />
 
                  </div>

                  
                  
                (
                    
                    <div className="btn-container" >
                      <button data-testid="create" onClick={handleCreate} className="btn-save">Create Profile</button>
                    </div>
                      ) : edit === true ? (<div className="btn-container" >
                      <button data-testid="save" onClick={handleSave} className="btn-save">Save Profile</button>
                    </div>) : (
                    <div className="btn-container" >
                      <button data-testid="edit" onClick={handleEdit} className="btn-edit">Edit Profile</button>
                    </div>
                    )

            </div>
          </div>
        </div>
    )
                    
                    }                     
export default Profile