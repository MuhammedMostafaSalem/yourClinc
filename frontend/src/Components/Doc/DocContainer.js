import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import DocList from './DocList'
import DocInfo from './DocInfo'
import DocContainerHook from '../../Hooks/DocHooks/DocContainerHook'

const BookContainer = () => {
    const [isloading, posts, deleteDoctor, dispatch, getDocId, selectedData] = DocContainerHook();
    
    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col md='6'>
                        <DocList isloading={isloading} posts={posts} deleteDoctor={deleteDoctor} dispatch={dispatch} getDocId={getDocId} />
                    </Col>
                    <Col md='6'>
                        <DocInfo selectedData={selectedData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BookContainer