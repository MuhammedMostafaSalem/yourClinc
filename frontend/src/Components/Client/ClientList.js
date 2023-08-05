import React from 'react'
import { toast } from 'react-toastify'

const ClientList = ({isloading, comments, deleteClient, dispatch, getClientId}) => {

    return (
        <div>
            <h2 className='text-center'>Client List</h2>
            {
                isloading ? ('loading...') :
                <ul className='list-group'>
                {
                    comments.length > 0 ? comments.map((item, index) => {
                        return (
                            <li key={index} className='list-group-item d-flex  justify-content-between align-items-center'>
                                <div>{item.nameClient}</div>
                                <div className='btn-group' role='group'>
                                    <button
                                        onClick={() => getClientId(item.id)}
                                        type='button'
                                        className='btn btn-primary'
                                    >
                                        Read
                                    </button>
                                    <button
                                        onClick={
                                            ()=> {
                                                const get = async() => {
                                                    await dispatch(deleteClient(item)).unwrap().then((originalPromiseResult)=> {
                            
                                                        console.log(originalPromiseResult)})
                                
                                                        .catch((rejectedValueOrSerializedError)=> {
                                                        console.log(rejectedValueOrSerializedError)
                                                        })
                                                }
                                                get();
                                                toast.success('Deleted successfully');
                                            }
                                        }
                                        type='button'
                                        className='btn btn-danger'
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        )
                    })
                    : <div className='text-center'>There is no client available</div>
                }
                </ul>
            }
        </div>
    )
}

export default ClientList