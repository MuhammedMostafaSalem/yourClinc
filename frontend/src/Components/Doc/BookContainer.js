import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BookList from './BookList'
import BookInfo from './BookInfo'
import { useDispatch, useSelector } from 'react-redux'
import { getDoctors, deleteDoc } from '../../redux/DocSlice'

const BookContainer = () => {
    const dispatch = useDispatch();
    const [selectedData, setSelectedData] = useState(null);

    const {isloading , docs } = useSelector(state => state.docSlice);

    useEffect(() => {
        dispatch(getDoctors())
    }, [dispatch]);

    const getDocId = (id)=> {
        const selectedDoc = docs.find((item) => item.id === id);
        setSelectedData((prev)=> {return {...prev , ...selectedDoc}})
    }

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col md='6'>
                        <BookList isloading={isloading} docs={docs} deleteDoc={deleteDoc} dispatch={dispatch} getDocId={getDocId} />
                    </Col>
                    <Col md='6'>
                        <BookInfo selectedData={selectedData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BookContainer