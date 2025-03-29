import React from 'react';
import '../css/Banner.css'
import Cards from "../Components/Cards.jsx"
import BannerImage from '../assets/Images/img1.jpg'; // Choose your banner image

function SoftwareDevelopment() {
  return (
    <>
     <div className="banner">
      <div className="banner-content">
        <h1>Software Development</h1>
        <p>Software development is the process of designing, creating, testing, and maintaining software applications to meet specific needs. It involves writing code, debugging errors, and improving functionality over time..</p>
      </div>
    </div>
    <Cards
    name =" anu"
    mail= "anu@gmail.com"
    message =" hi hope you are fine "/>
    e
    </>
   
  );
}

export default SoftwareDevelopment;
