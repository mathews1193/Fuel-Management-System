import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const img = [
        'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        'https://images.pexels.com/photos/3802793/pexels-photo-3802793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    ]; 

    return (
        <div>
            <div className="img4">
                <div className="img-set1">
                    <img className="img1"src={img[0]} alt="Logo" width="350" height="300"/>
                    <div className="title-background">
                        <h1 className="sub-title1">Taking Your Fuel Management Need</h1>
                        <h1 className="sub-title1">To</h1>
                        <h1 className="sub-title1">The Next Level!</h1>
                    </div>                    
                </div>
                <div className="img-set2">
                    <div className="btn-containter1">
                        <div className="title-background">
                            <h1 className="sub-title1">Making Orders Easier</h1>
                            <h1 className="sub-title1">For</h1>
                            <h1 className="sub-title1">Companies Around The World </h1>
                        </div>
                        <Link to ="/login"> <button className="btn-signup">Sign Up Here</button> </Link>
                    </div>
                    <img className="img1"src={img[1]} alt="Logo" width="350" height="300"/>
                </div>
            </div>
        </div>
    )
}

export default Home
