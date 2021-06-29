import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const img = [
        'https://images.pexels.com/photos/3802793/pexels-photo-3802793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
    ]; 

    return (
        <div>
            <div className="img4">
                <div className="img-set1">
                    <img className="img1"src={img[0]} alt="Logo" width="350" height="300"/>
                    <h1 className="sub-title1">Taking Your Fuel Managment Need to The Next Level!</h1>
                </div>
                <div className="img-set2">
                    <h1 className="sub-title1">Making Orders Easier For companies Around The World </h1>
                    <img className="img1"src={img[1]} alt="Logo" width="350" height="300"/>
                    <div className="btn-containter1">
                        <Link to ="/login"> <button className="btn-signup">Sign Up Here</button> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
