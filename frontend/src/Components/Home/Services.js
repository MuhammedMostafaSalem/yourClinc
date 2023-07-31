import React from 'react'
import '../../Styles/Services.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth, faEye, faFaceSmile } from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    const serviceData = [
        {
            icon: faTooth,
            title: "Dental Care",
            subtitle: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
            bg: "#fdefe6",
        },
        {
            icon: faEye,
            title: "Easy Returns",
            subtitle: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
            bg: "#ceebe9",
        },
        {
            icon: faFaceSmile,
            title: "Secure Payment",
            subtitle: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet.",
            bg: "#e2f2b2",
        },
    ];
    return (
        <div className='services'>
            <Container>
                <h3>High Quality Services For You</h3>
                <Row>
                    {
                        serviceData.map((item, index) => {
                            return (
                                <Col lg='4' md='6' key={index}>
                                    <div className='service_item' style={{backgroundColor: `${item.bg}`}}>
                                        <span>
                                            <FontAwesomeIcon icon={item.icon} className='i' />
                                        </span>
                                        <div className='service_content'>
                                            <h5>{item.title}</h5>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Services