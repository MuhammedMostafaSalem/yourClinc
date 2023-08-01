import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getDoctors } from '../../redux/DocSlice';
import { insertclient } from '../../redux/ClientSlice';

const AddForm = () => {
    const dispatch = useDispatch();

    // get data doctor
    const [selectedData, setSelectedData] = useState(null);

    const { docs } = useSelector(state => state.docSlice);

    useEffect(() => {
        setSelectedData(null)
        dispatch(getDoctors())
        setSelectedData(!null)
    }, [selectedData]);


    // add data client
    const nameClientRef = useRef(null);
    const nameDocRef = useRef(null);
    const dateRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleSubmit=(e)=> {
        e.preventDefault();

        const data ={
            clientName: nameClientRef.current.value,
            docName: nameDocRef.current.value,
            date: dateRef.current.value,
            description: descriptionRef.current.value,
        };

        dispatch(insertclient(data));

        nameClientRef.current.value = null;
        nameDocRef.current.value = null;
        dateRef.current.value = null;
        descriptionRef.current.value = null;
    }

    return (
        <div>
            <Container>
                <Row className='AddForm pb-5'>
                    <Col md='12' className='mt-3'>
                        <h2 className='text-center'>Insert Client</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group my-3'>
                                <label htmlFor='title' className='mb-2'>Name</label>
                                <input placeholder='Your Name' type='text' className='form-control' id='title' ref={nameClientRef} />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='nameDoctor' className='mb-2'>Name Doctor</label>
                                <Form.Select aria-label="Default select example" id='nameDoctor'>
                                    <option>Open this select menu</option>
                                    {
                                        docs ?
                                            docs.map((item, index) => {
                                                return (
                                                    <option key={index} ref={nameDocRef}>{`Dr. ${item.name}`}</option>
                                                )
                                            })
                                        : null
                                    }
                                </Form.Select>
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='shift' className='mb-2'>The Date</label>
                                <input placeholder='Your The Appointment' type='text' className='form-control' id='shift' ref={dateRef} />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='jobDoctor' className='mb-2'>Description</label>
                                <Form.Select aria-label="Default select example" id='jobDoctor' ref={descriptionRef}>
                                    <option>Doctor's Job</option>
                                    {
                                        docs ?
                                            docs.map((item, index) => {
                                                return (
                                                    <option key={index}>{item.description}</option>
                                                )
                                            })
                                        : null
                                    }
                                </Form.Select>
                            </div>
                            <button type='submit' className='btn btn-primary'>
                                Submit
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddForm