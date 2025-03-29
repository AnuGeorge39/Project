import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import Slide_1 from '../assets/Images/img1.jpg';
import Slide_2 from '../assets/Images/img2.jpg';
import Slide_3 from '../assets/Images/img3.jpg';
import Slide_4 from '../assets/Images/img4.jpg';
import Slide_5 from '../assets/Images/img5.jpg';
import '../css/Services.css'; // Importing the CSS file

function CarouselWithCards() {
  return (
    <div className="container mt-5">
      <Card.Title className="services">Our Services</Card.Title>
      <Carousel>
        {/* Carousel Item 1 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_1} />
              <Card.Body>
                <Card.Title>SEO Services</Card.Title>
                <Card.Text>
                  Ariussoft enhances online visibility with targeted SEO strategies, including keyword optimization and link building.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_2} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  We design user-centric web applications with intuitive navigation, responsive layouts, and robust functionality. 
                  </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_3} />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Ariussoft designs tailored digital marketing strategies with SEO, social media, and analytics to maximize ROI.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_4} />
              <Card.Body>
                <Card.Title>Web Design</Card.Title>
                <Card.Text>
                  Ariussoft crafts engaging websites by blending aesthetics with cutting-edge technology for seamless user..
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        {/* Carousel Item 2 */}
        <Carousel.Item>
          <div className="d-flex justify-content-between">
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_2} />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  We design user-centric web applications with intuitive navigation, responsive layouts, and robust functionality. 
                  </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_3} />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                  Ariussoft designs tailored digital marketing strategies with SEO, social media, and analytics to maximize ROI.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_4} />
              <Card.Body>
                <Card.Title>Web Design</Card.Title>
                <Card.Text>
                  Ariussoft crafts engaging websites by blending aesthetics with cutting-edge technology for seamless user..
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
            <Card className="custom-card">
              <Card.Img variant="top" src={Slide_1} />
              <Card.Body>
              <Card.Title>SEO Services</Card.Title>
                <Card.Text>
                  Ariussoft enhances online visibility with targeted SEO strategies, including keyword optimization and link building.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>

        {/* Repeat similarly for other Carousel Items */}
      </Carousel>
    </div>
  );
}

export default CarouselWithCards;
