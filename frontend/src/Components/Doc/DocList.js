import React from 'react'
import { toast } from 'react-toastify';

const DocList = ({isloading, posts, deleteDoctor, dispatch, getDocId}) => {
    
    return (
        <div>
            <h2 className='text-center'>Doctors List</h2>
            {
                isloading ? ('loading...') :
                <ul className='list-group'>
                    {
                        posts.length > 0 ? posts.map((item, index) => {
                            return (
                                <li className='list-group-item d-flex  justify-content-between align-items-center' key={index}>
                                    <div>{item.name}</div>
                                    <div className='btn-group' role='group'>
                                        <button type='button' className='btn btn-primary' onClick={() => getDocId(item.id)}>
                                            Read
                                        </button>
                                        <button
                                            type='button'
                                            className='btn btn-danger'
                                            onClick={()=> {
                                                const get = async() => {
                                                    await dispatch(deleteDoctor(item)).unwrap().then((originalPromiseResult)=> {
                            
                                                        console.log(originalPromiseResult)})
                                
                                                        .catch((rejectedValueOrSerializedError)=> {
                                                        console.log(rejectedValueOrSerializedError)
                                                        })
                                                }
                                                get();
                                                toast.success('Deleted successfully');
                                            }
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            )
                        }) : 'there is no doctor now'
                    }
                </ul>
            }
        </div>
    );
}

export default DocList