import React from 'react';
import { Figure, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import custom CSS

// About component to display store information
const About = () => {
    return (
        <Container className="about-container">
            <h1>About Us</h1>
            {/* Store logo */}
            <Figure>
                <Figure.Image
                    width={300}
                    height={180}
                    alt="Store logo"
                    src="https://i.pinimg.com/736x/7b/5e/3b/7b5e3b6868e5649ca8e872b1de076309.jpg" 
                />
            
            </Figure>
            <p>Welcome to our online store! We offer a variety of products to suit all your needs.</p>
            
            {/* Store images */}
            <Row>
                <Col xs={12} className="mb-3">
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={300}
                            alt="Store front"
                            src="https://vernsglass.com/wp-content/uploads/2019/09/Commercial-Storefronts.jpg"
                        />
                        <Figure.Caption>
                            Our Store Front
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={12}>
                    <Figure>
                        <Figure.Image
                            width={400}
                            height={300}
                            alt="Store interior"
                            src="https://retail-focus.co.uk/wp-content/uploads/2022/03/Moss-Bros.-Interior-1-min-1024x768.jpeg"
                        />
                        <Figure.Caption>
                            Inside Our Store
                        </Figure.Caption>
                    </Figure>
                </Col>
            </Row>
            <p>Contact us at: new@bespokeblazers.com</p>
        </Container>
    );
};

export default About;
