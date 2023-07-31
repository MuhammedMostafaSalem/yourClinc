import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { insertdocs } from '../../redux/DocSlice';

const AddForm = () => {
    const dispatch = useDispatch();

    const nameRef = useRef(null);
    const shiftRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleSubmit=(e)=> {
        e.preventDefault();

        const data ={
            name: nameRef.current.value,
            shiftDate: shiftRef.current.value,
            description: descriptionRef.current.value,
        };

        dispatch(insertdocs(data));

        nameRef.current.value = null;
        shiftRef.current.value = null;
        descriptionRef.current.value = null;
    }

    return (
        <div>
            <Container>
                <Row className='AddForm pb-5'>
                    <Col md='12' className='mt-3'>
                        <h2 className='text-center'>Insert Doctor</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='form-group my-3'>
                                <label htmlFor='title' className='mb-2'>Name</label>
                                <input type='text' className='form-control' id='title' ref={nameRef} />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='price' className='mb-2'>Shift Date</label>
                                <input type='text' className='form-control' id='price' ref={shiftRef} />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='Description' className='mb-2'>Description</label>
                                <input type='text' className='form-control' id='Description' ref={descriptionRef} />
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