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
 
  // variables 
  const [UserID, setuserId] = useState('');
  const [FullName, setFullName] = useState('');
  const [Address1, setAddress1] = useState('');
  const [Address2, setAddress2] = useState('');
  const [City, setCity] = useState('');
  const [USState, setUSState] = useState('');
  const [ZipCode, setZipCode] = useState('');
  const [FullNameErr, setFullNameErr] = useState('');
  const [Address1Err, setAddress1Err] = useState('');
  const [CityErr, setCityErr] = useState('');
  const [USStateErr, setUSStateErr] = useState('');
  const [ZipCodeErr, setZipCodeErr] = useState('');
  const [custProfile, setCustProfile] = useState([]);   

  const formValidation=()=>{
    const fullNameErr = {};
    const address1Err = {};
    const cityErr = {};
    const USStateErr = {};
    const zipCodeErr = {};
    let isValid = true;

    if(FullName === ''){
      fullNameErr.errFullName = "Full Name is required";
      isValid = false;
    }
    if(FullName.trim().length > 50){
      fullNameErr.errFullName = "Full Name must be less than 50 characters";
      isValid = false;
    }
    if(Address1 === ''){
      address1Err.errAddress1 = "Address is required";
      isValid = false;
    }
    if(Address1.trim().length > 100){
      address1Err.errAddress1 = "Address must be less than 100 characters";
      isValid = false;
    }
    if(City === ''){
      cityErr.errCity = "City is required";
      isValid = false;
    }
    if(City.trim().length > 100){
      address1Err.errAddress1 = "Address must be less than 100 characters";
      isValid = false;
    }
    if(USState === ''){
      USStateErr.errUSState = "Please pick a state"
      isValid = false;
    }
    if(ZipCode === ''){
      zipCodeErr.errZipCode = "Zip code is required";
      isValid = false;
    }
  
    
    if(!ZipCode.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)){
      zipCodeErr.errZipCode = "Zip code is invalid";
      isValid = false;
    }
   

    setFullNameErr(fullNameErr);
    setAddress1Err(address1Err);
    setCityErr(cityErr);
    setUSStateErr(USStateErr);
    setZipCodeErr(zipCodeErr);

    return isValid;
  }
  
    
      //we will use edit state to determine which button to show
      const [edit, setEdit] = useState(false);
      const [createData, setCreateData] = useState(false)

      const getProfile = (e) => {
        console.log("test1")
        Axios.get("http://localhost:3001/getprofile").then((response) => {
          setCustProfile(response.data);
          setProfile();
          console.log("test2")
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
        const isValid = formValidation();
        
        if(isValid){
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
        }
        
      };

      const handleCreate = (e) => {
       
        toast("Client Profile Created Successfully!");
        
        console.log(UserID, FullName, Address1, Address2, City, USState, ZipCode)
        const isValid = formValidation();
        
        if(isValid){
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
            setCreateData(false);
        })}
        
      };
      
      const handleEdit = (e) => {
       
        //set edit to true when edit is clicked
        setEdit(true);
      };
      
      
        const handleChange = (e, result) => {
          setUSState(result.value)
        }
        useEffect(()=> getProfile(),[])
        useEffect(()=> setProfile(),[custProfile])
        
        
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
                      disabled={!edit}
                    />   
                    {Object.keys(FullNameErr).map((key)=>{
                      return <div 
                      data-testid="testFN"
                      className = "err-msg">{FullNameErr[key]}</div>
                    })}     
                      
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
                      disabled={!edit}
                    />
                    {Object.keys(Address1Err).map((key)=>{
                      return <div
                      data-testid="testA1" 
                      className = "err-msg">{Address1Err[key]}</div>
                    })} 
              
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
                      disabled={!edit}
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
                      disabled={!edit}
                    />
                    {Object.keys(CityErr).map((key)=>{
                      return <div 
                      data-testid="testC"
                      className = "err-msg">{CityErr[key]}</div>
                    })} 
                            
                            <Dropdown
                              data-testid="testUSState"
                              className="form2"
                              placeholder='Select State'
                              search
                              value={USState}
                              options={options}
                              type="text"
                              
                              onChange={handleChange}
                              disabled={!edit}
                            />
                            {Object.keys(USStateErr).map((key)=>{
                      return <div 
                      data-testid="testST"
                      className = "err-msg">{USStateErr[key]}</div>
                    })} 
                    
                                                    
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
                      disabled={!edit}
                    />
                    {Object.keys(ZipCodeErr).map((key)=>{
                      return <div
                      data-testid="testZC"
                      className = "err-msg">{ZipCodeErr[key]}</div>
                    })} 
 
                  </div>

                  
                  
                  {createData === true ? (
                    
                    <div className="btn-container" >
                      <button data-testid="create" onClick={handleCreate} className="btn-save">Create Profile</button>
                    </div>
                      ) : edit === true ? (<div className="btn-container" >
                      <button data-testid="save" onClick={handleSave} className="btn-save">Save Profile</button>
                    </div>) : (
                    <div className="btn-container" >
                      <button data-testid="edit" onClick={handleEdit} className="btn-edit">Edit Profile</button>
                    </div>
                    )}

            </div>
          </div>
        </div>
    )
                    
                    }                     
export default Profile