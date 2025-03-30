import React from 'react';
import '../css/Banner.css'
import Cards from "../Components/Cards.jsx"
import BannerImage from '../assets/Images/img1.jpg'; // Choose your banner image
import Contactform from '../Components/ContactForm.jsx';

function SoftwareDevelopment() {
  return (
    <>
     <div className="banner">
      <div className="banner-content">
        <h1>Software Development</h1>
        <p>Software development is the process of designing, creating, testing, and maintaining software applications to meet specific needs. It involves writing code, debugging errors, and improving functionality over time..</p>
      </div>
    </div>
    <p>For over 20 years, Arius has been a leader in the technology industry, specializing in custom application development tailored to the unique needs of our clients. We have successfully built applications using Linux and ASP.NET technology, showcasing our expertise and versatility. Our offerings include ERP, Accounting, CRM, Church/Temple, School, and Restaurant Management Software, designed to serve a wide range of businesses and services. These applications are crafted to deliver exceptional user experiences while meeting the specific requirements of our clients. With a focus on technological innovation and industry best practices, Arius continues to provide high-quality custom applications that drive business growth and success.</p>
   
    <Contactform/>
    </>
   
  );
}

export default SoftwareDevelopment;
