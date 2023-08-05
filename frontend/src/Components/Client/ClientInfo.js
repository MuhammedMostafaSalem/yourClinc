import React from 'react'

const ClientInfo = ({selectedData}) => {
    return (
        <div className='bookInfo'>
            <h2 className='text-center'>Client Details</h2>
            {
                selectedData ?
                    <div className='text-center'>
                        <p className='fw-bold'>Your Name: {selectedData.nameClient}</p>
                        <p className='fw-bold'>Name Doctor: {selectedData.nameDoctor}</p>
                        <p className='fw-bold'>The Appointment Time: {selectedData.appointmentTime}</p>
                        <p className='fw-bold'>The Appointment Day: {selectedData.appointmentDay}</p>
                    </div>
                : <div className='alert alert-secondary' role='alert'>
                There is no client selected yet. Please select!
                </div>
            }
        </div>
    )
}

export default ClientInfo