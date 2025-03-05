// In UncontrolledExample.js
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Slide_1 from '../assets/Images/WEBAPPDEV.jpg';
import Slide_2 from '../assets/Images/digital-marketing.jpg';
import Slide_3 from '../assets/Images/istockphoto-661823976-612x612.jpg';
import "./Carousel.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_1} />
        <Carousel.Caption>
          <h3>Web Development</h3>
          <p>Process of building, programming, and maintaining websites and web applications.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_2} />
        <Carousel.Caption>
          <h3>Digital Marketing</h3>
          <p>Promotion of brands to connect with potential customers using the internet and other forms of digital communication.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_3} />
        <Carousel.Caption>
          <h3>Web Design</h3>
          <p>Creating the visual elements and layout of a website.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Additional Carousel.Items */}
    </Carousel>
  );
}

export default UncontrolledExample;
