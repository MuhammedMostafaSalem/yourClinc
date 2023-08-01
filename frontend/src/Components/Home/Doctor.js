import React, { useEffect, useState } from 'react'
import '../../Styles/Doctor.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors } from '../../redux/DocSlice'

const Doctor = () => {
    const dispatch = useDispatch();
    const [selectedData, setSelectedData] = useState(null);
    const { docs } = useSelector(state => state.docSlice);
    useEffect(() => {
        setSelectedData(null)
        dispatch(getDoctors())
        setSelectedData(!null)
    }, [selectedData]);
    return (
        <div className='doctor'>
            <Container>
                <h3>Meet Our Speciallost</h3>
                <Row>
                    {
                        docs ?
                            docs.map((item, index) => {
                                return (
                                    <Col lg='4' md='6' key={index}>
                                        <Card className='cardItem'>
                                            <h4>{`Dr. ${item.name}`}</h4>
                                            <p>{item.description}</p>
                                            <p>{item.shiftDate}</p>
                                        </Card>
                                    </Col>
                                )
                            })
                        : <div className='alert alert-secondary' role='alert'>
                        There is no doctor selected yet. Please select!
                        </div>
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Doctor