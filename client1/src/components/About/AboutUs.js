import React from 'react';
import './AboutUs.css'

function aboutUs() {

        const img = [
            'https://images.freeimages.com/images/small-previews/ced/tanker-truck-reflection-1562831.jpg',
            'https://media.istockphoto.com/photos/fuel-tanker-picture-id172721305?k=6&m=172721305&s=612x612&w=0&h=oyAEhis-vhkySh2iaZLQzSJtyiJQYjufF4QpMJtz8aQ='
        ]; 
    
        return (
            <div>
                <div className="about">
                    <div className="img-set10">
                        <div className="title-background11">
                            <h1 className="sub-title11">About Us</h1> 
                        </div>
                        <div className="img-container">
                            <img className="img11"src={img[0]} alt="Logo" width="350" height="300"/>
                            <img className="img11"src={img[1]} alt="Logo" width="350" height="300"/>  
                        </div>
                    </div>
                    <div classname="msg">
                        <h2 className="sub-title12">We have all your bulk fuel needs covered, after all, it’s what we have done for over 30 years. As one of the largest fuel distributors, we have the personnel, equipment, and knowledge necessary to take care of any fuel needs your business is facing</h2>
                        <h2 className="sub-title12">Call us at 1-800-FUELNOW, or sign up on our website today!</h2>
                    </div> 
                    
                </div>
            </div>
        )              
    }

export default aboutUs