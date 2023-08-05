import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import DocContainerHook from '../../Hooks/DocHooks/DocContainerHook';
import AddClientHook from '../../Hooks/ClientHooks/AddClientHook';

const AddClient = () => {
    const [isloading, posts, deleteDoctor, dispatch, getDocId, selectedData] = DocContainerHook();
    const [nameClient, onChangNameClient, nameDoc, onChangNameDoc, appointmentTime, onChangAppointmentTime, appointmentDay, onChangAppointmentDay, onSubmit] = AddClientHook();

    return (
        <div>
            <Container>
                <Row className='AddForm pb-5'>
                    <Col md='12' className='mt-3'>
                        <h2 className='text-center'>Insert Client</h2>
                        <form >
                            <div className='form-group my-3'>
                                <label htmlFor='name' className='mb-2'>Your Name</label>
                                <input
                                    placeholder='Your Name'
                                    type='text'
                                    className='form-control'
                                    id='name'
                                    value={nameClient}
                                    onChange={onChangNameClient}
                                />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='nameDoctor' className='mb-2'>Name Doctor</label>
                                <Form.Select
                                    value={nameDoc}
                                    onChange={onChangNameDoc}
                                    aria-label="Default select example"
                                    id='nameDoctor'
                                >
                                    <option>Open this select menu</option>
                                    {
                                        posts.length > 0 ? posts.map((item, index) => {
                                            return (
                                                <option key={index}>{item.name}</option>
                                            )
                                        })
                                        : <option>There is no doctor now</option>
                                    }
                                </Form.Select>
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='appointmentTime' className='mb-2'>Appointment time</label>
                                <input
                                    placeholder='Your The Appointment Time'
                                    type='text'
                                    className='form-control'
                                    id='appointmentTime'
                                    value={appointmentTime}
                                    onChange={onChangAppointmentTime}
                                />
                            </div>
                            <div className='form-group my-3'>
                                <label htmlFor='appointmentDay' className='mb-2'>Appointment day</label>
                                <input
                                    placeholder='Your The Appointment Day'
                                    type='date'
                                    className='form-control'
                                    id='appointmentDay'
                                    value={appointmentDay}
                                    onChange={onChangAppointmentDay}
                                />
                            </div>
                            <button onClick={onSubmit} className='btn btn-primary'>
                                Submit
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AddClient