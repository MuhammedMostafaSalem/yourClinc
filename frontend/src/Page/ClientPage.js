import React from 'react'
import ClientContainer from '../Components/Client/ClientContainer'
import AddForm from '../Components/Client/AddForm'

const ClientPage = () => {
    return (
        <div>
            <AddForm/>
            <ClientContainer/>
        </div>
    )
}

export default ClientPage