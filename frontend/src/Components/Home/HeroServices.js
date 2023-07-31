import React from 'react'
import '../../Styles/HeroServices.css'
import { Col, Container, Row } from 'react-bootstrap'
import serviceData from '../../Assets/data/ServicesData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeroServices = () => {
    return (
        <div className='services_section'>
            <Container>
                <Row>
                    {
                        serviceData.map((item, index) => {
                            return (
                                <Col lg='4' md='6' className='col_service' key={index}>
                                    <div className='service_item' style={{backgroundColor: `${item.bg}`}}>
                                        <span>
                                            <FontAwesomeIcon icon={item.icon} className='i' />
                                        </span>
                                        <div className='service_content'>
                                            <h3>{item.title}</h3>
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

export default HeroServices