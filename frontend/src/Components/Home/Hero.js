import React from 'react'
import '../../Styles/Home.css'
import { Col, Container, Row } from 'react-bootstrap'
import mainHero from'../../Assets/images/main-bg.png'

const Hero = () => {
    return (
        <div className='hero'>
            <Container>
                <Row>
                    <Col md='6'>
                        <div className='heroText'>
                            <h2>feel better about finding healthyCare</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, consequuntur.</p>
                            <div className='btn'>book appointment</div>
                        </div>
                    </Col>
                    <Col md='6'>
                        <img src={mainHero} alt='' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero