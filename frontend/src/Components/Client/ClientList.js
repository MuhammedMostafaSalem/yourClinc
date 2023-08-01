import React from 'react'

const ClientList = ({isloading, clit, deleteClient, dispatch, getClientId}) => {
    const clintList = clit.length > 0 ? clit.map((item)=> {
        return(
            <li className='list-group-item d-flex  justify-content-between align-items-center' key={item.id}>
                <div>{item.clientName}</div>
                <div className='btn-group' role='group'>
                    <button type='button' className='btn btn-primary' onClick={()=> getClientId(item.id)}>
                        Read
                    </button>
                    <button type='button' className='btn btn-danger'
                        onClick={()=> dispatch(deleteClient(item)).unwrap().then((originalPromiseResult)=> {
                            
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
    }) : 'there is no client available!';

    return (
        <div>
            <h2 className='text-center'>Client List</h2>
            <ul className='list-group'>
                {
                    isloading ? ('loading...') : (
                        <ul className='list-group'>
                            {clintList}
                        </ul>
                    )
                }
            </ul>
        </div>
    )
}

export default ClientList