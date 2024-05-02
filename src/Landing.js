import React from 'react';
import bgdVid from "./video/backgrd.mp4";
import "./Landing.css";

function Landing() {
  return (
    <div className='container'>
      <div className='nav'>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#events">EVENTS</a></li>
          <li className="logo-li">
            <img className="logo" src="./FROSHlogo.jpeg" alt="err" />
          </li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#about">ABOUT</a></li>
        </ul>
      </div>
      
      <img className="tagLine" src="https://i.ibb.co/510tCNM/tag.png" alt="err" />
      
      <a href="#register"><img className="register" src="https://i.ibb.co/FVydL0k/register.png" alt="Register" /></a>
      
      <footer className="footer">
        <p>&copy;FROSH TIET</p>
      </footer>
      <video className="bgd" src={bgdVid} autoPlay loop muted />            
      </div>
  );
}

export default Landing;

