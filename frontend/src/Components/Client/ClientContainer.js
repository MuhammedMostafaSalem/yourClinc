import React, { useEffect, useState } from 'react'
import ClientList from './ClientList'
import { Col, Container, Row } from 'react-bootstrap'
import ClientInfo from './ClientInfo'
import { useDispatch, useSelector } from 'react-redux'
import { getClients, deleteClient } from '../../redux/ClientSlice'

const ClientContainer = () => {
    const dispatch = useDispatch();
    const [selectedData, setSelectedData] = useState(null);

    const {isloading , clit } = useSelector(state => state.clientSlice);

    useEffect(() => {
        dispatch(getClients())
    }, [dispatch]);

    const getClientId = (id)=> {
        const selectedClient = clit.find((item) => item.id === id);
        setSelectedData((prev)=> {return {...prev , ...selectedClient}})
    }

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col md='6'>
                        <ClientList isloading={isloading} clit={clit} deleteClient={deleteClient} dispatch={dispatch} getClientId={getClientId}/>
                    </Col>
                    <Col md='6'>
                        <ClientInfo selectedData={selectedData}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClientContainer