// In UncontrolledExample.js
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import Slide_1 from '../assets/Images/WEBAPPDEV.jpg';
import "./Carousel.css"

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_1} />
        <Carousel.Caption>
          <h3>First slide label 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_1} />
        <Carousel.Caption>
          <h3>First slide label 2</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image className='slide_img' src={Slide_1} />
        <Carousel.Caption>
          <h3>First slide label 3</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Additional Carousel.Items */}
    </Carousel>
  );
}

export default UncontrolledExample;
