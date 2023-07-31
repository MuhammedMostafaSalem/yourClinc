import React from 'react'
import '../../Styles/Doctor.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import doc1 from '../../Assets/images/d2.png'
import doc2 from '../../Assets/images/d3.png'
import doc3 from '../../Assets/images/d4.png'

const Doctor = () => {
    const doctor = [
        {
            img: doc1,
            name: "Dr. Paradox"
        },
        {
            img: doc2,
            name: "Dr. Alex"
        },
        {
            img: doc3,
            name: "Dr. Ana"
        },
    ]
    return (
        <div className='doctor'>
            <Container>
                <h3>Meet Our Speciallost</h3>
                <Row>
                    {
                        doctor.map((item, index) => {
                            return (
                                <Col lg='4' md='6' key={index}>
                                    <Card className='cardItem'>
                                        <img src={item.img} alt=''/>
                                        <h6>{item.name}</h6>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Doctor