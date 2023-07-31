import React from 'react'

const BookList = ({isloading, docs, deleteDoc, dispatch, getDocId}) => {
    const docList = docs.length > 0 ? docs.map((item)=> {
        return(
            <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
                <div>{item.name}</div>
                <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-primary' onClick={()=> getDocId(item.id)}>
                        Read
                    </button>
                    <button type='button' className='btn btn-danger'
                        onClick={()=> dispatch(deleteDoc(item)).unwrap().then((originalPromiseResult)=> {
                            
                        console.log(originalPromiseResult)})

                        .catch((rejectedValueOrSerializedError)=> {
                        console.log(rejectedValueOrSerializedError)
                        })
                    }>
                        Delete
                    </button>
                </div>
            </li>
        )
    }) : 'there is no docs available!';

    return (
        <div>
            <h2 className='text-center'>Doctors List</h2>
            <ul className='list-group'>
                {
                    isloading ? ('loading...') : (
                        <ul className='list-group'>
                            {docList}
                        </ul>
                    )
                }
            </ul>
        </div>
    )
}

export default BookList