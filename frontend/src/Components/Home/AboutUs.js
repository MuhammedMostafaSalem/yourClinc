import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Styles/AboutUs.css'

const AboutUs = () => {
    const aboutUsData = [
        {
            titele: "Advance Care",
            details: "Lorem inpum dolor sit.",
            bg: "rgb(206, 235, 233)"
        },
        {
            titele: "Online Medicine",
            details: "Lorem inpum dolor sit.",
            bg: "rgb(206, 235, 233)"
        },
        {
            titele: "Medical & Surgical",
            details: "Lorem inpum dolor sit.",
            bg: "rgb(206, 235, 233)"
        },
        {
            titele: "Lab Test's",
            details: "Lorem inpum dolor sit.",
            bg: "rgb(206, 235, 233)"
        },
    ]
    return (
        <div className='aboutUs'>
            <Container>
                <h3>Why Chouse Us?</h3>
                <Row>
                    {
                        aboutUsData.map((item, index) => {
                            return (
                                <Col key={index}>
                                    <div className='about_item' style={{backgroundColor: `${item.bg}`}}>
                                        <div className='about_content'>
                                            <h5>{item.titele}</h5>
                                            <p>{item.details}</p>
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

export default AboutUs