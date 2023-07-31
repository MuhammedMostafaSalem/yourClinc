import React from 'react'
import '../../Styles/BookInfo.css'

const BookInfo = ({selectedData}) => {
    return (
        <div className='bookInfo'>
            <h2 className='text-center'>Doctor Details</h2>
            {
                selectedData ?
                    <div className='text-center'>
                        <p className='fw-bold'>Name: {selectedData.name}</p>
                        <p className='fw-bold'>Description: {selectedData.description}</p>
                        <p className='fw-bold'>shift: {selectedData.shiftDate}</p>
                    </div>
                : <div className='alert alert-secondary' role='alert'>
                There is no doctor selected yet. Please select!
                </div>
            }
        </div>
    )
}

export default BookInfo