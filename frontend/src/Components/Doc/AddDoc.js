import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AddDocHook from '../../Hooks/DocHooks/AddDocHook';

const AddDoc = () => {
    const [name, onChangName, startShift, onChangStartShift, endShift, onChangEndShift, description, onChangDescription, onSubmit] = AddDocHook()

    return (
        <div>
            <Container>
                <Row className='AddForm pb-5'>
                    <Col md='12' className='mt-3'>
                        <h2 className='text-center'>Insert Doctor</h2>
                        <div>
                            <div className='form-group my-3'>
                                <label htmlFor='title' className='mb-2'>Name</label>
                                <input
                                    placeholder='Name Doctor'
                                    type='text'
                                    className='form-control'
                                    id='title'
                                    value={name}
                                    onChange={onChangName}
                                />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='startShift' className='mb-2'>Start Shift</label>
                                <input
                                    placeholder='hour to hour'
                                    type='text'
                                    className='form-control'
                                    id='startShift'
                                    value={startShift}
                                    onChange={onChangStartShift}
                                />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='endShift' className='mb-2'>End Shift</label>
                                <input
                                    placeholder='hour to hour'
                                    type='text'
                                    className='form-control'
                                    id='endShift'
                                    value={endShift}
                                    onChange={onChangEndShift}
                                />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='Description' className='mb-2'>Description</label>
                                <input
                                    placeholder="Doctor's Job"
                                    type='text'
                                    className='form-control'
                                    id='Description'
                                    value={description}
                                    onChange={onChangDescription}
                                />
                            </div>
                            <button onClick={onSubmit} className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddDoc