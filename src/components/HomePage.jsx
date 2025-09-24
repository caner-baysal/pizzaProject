import React from 'react';
import logo from '../../images/iteration-1-images/logo.svg';
import home_banner from '../../images/iteration-1-images/home-banner.png';
import "./HomePage.css";
import { useHistory } from 'react-router-dom';


const HomePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/order")
    }
    return (
        <div className='homepage'>
                <img src={logo} alt="Pizza Projesi Logo" className="logo"/>
                <h1>KOD ACIKTIRIR<br/>PİZZA, DOYURUR</h1>
                <button className='btn'onClick={handleClick}>ACIKTIM</button>
                <img src={home_banner} alt="Pizza Projesi Banner" className="home_banner"/>
        </div>
    )
}
export default HomePage;