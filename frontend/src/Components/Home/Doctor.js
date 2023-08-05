import React from 'react'
import '../../Styles/Doctor.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import DocContainerHook from '../../Hooks/DocHooks/DocContainerHook';

const Doctor = () => {
    const [isloading, posts, deleteDoctor, dispatch, getDocId, selectedData] = DocContainerHook();

    return (
        <div className='doctor'>
            <Container>
                <h3>Meet Our Speciallost</h3>
                <Row>
                    <Col lg='4' md='6'>
                        {
                            posts.length > 0 ? posts.map((item, index) => {
                                return(
                                    <Card className='cardItem' key={index}>
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                        <p>{`${item.startShift} : ${item.endShift}`}</p>
                                    </Card>
                                )
                            })
                            : <div className='text-center'>There is no doctor now</div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Doctor