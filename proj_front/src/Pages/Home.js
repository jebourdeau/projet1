import React from 'react';
import logo from '../assets/img/pc/water2.jpg';
import logo2 from '../assets/img/3d/socle.jpg';
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {
   const navigate = useNavigate();
   
    return (
        <div className='titre'>
            <h1>Infoccase3D</h1>
        <li>
        <img src={logo} className="App-logo" alt="logo" />
        </li>
        <p className='intro'>Welcome to my World.</p>
        <li>
        <img src={logo2} className="App-logo" alt="logo2" />
        </li>
        
        </div>
    );
};

export default Home;