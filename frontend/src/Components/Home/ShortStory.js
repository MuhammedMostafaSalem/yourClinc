import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import testimonialsImg from '../../Assets/images/testimonials-img.png'
import '../../Styles/ShortStory.css'

const ShortStory = () => {
    const box = [
        {
            title: "1000+",
            subtitle: "happy patients",
            bg: "#fdefe6",
        },
        {
            title: "215+",
            subtitle: "Expert Doctor",
            bg: "#ceebe9",
        },
        {
            title: "315+",
            subtitle: "Hospital Room's",
            bg: "#e2f2b2",
        },
        {
            title: "106+",
            subtitle: "Aword Wining",
            bg: "#d6e5fb",
        },
    ];

    return (
        <div>
            <Container>
                <div className='shortStory'>
                    <Row>
                        <Col md='6'>
                            <img src={testimonialsImg} alt='' />
                        </Col>
                        <Col md='6'>
                            <div className='textShortStory'>
                                <h3>short story about our clinic.</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate a officia harum ad voluptates reprehenderit et accusamus repudiandae quasi quidem fugiat, veritatis itaque, voluptatibus mollitia repellat consectetur est molestiae porro asperiores cumque unde sit minima labore? Laudantium recusandae, perspiciatis officiis rem adipisci voluptas excepturi magnam minus eveniet, libero quae dolor!</p>
                                
                                <Row>
                                    {
                                        box.map((item, index) => {
                                            return (
                                                <Col md='6' key={index}>
                                                    <div className='storyItem' style={{backgroundColor: `${item.bg}`}}>
                                                        <h4>{item.title}</h4>
                                                        <p>{item.subtitle}</p>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ShortStory