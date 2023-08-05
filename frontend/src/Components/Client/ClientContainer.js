import React from 'react'
import ClientList from './ClientList'
import { Col, Container, Row } from 'react-bootstrap'
import ClientInfo from './ClientInfo'
import ClientContainerHook from '../../Hooks/ClientHooks/ClientContainerHook'

const ClientContainer = () => {
    const [isloading, comments, deleteClient, dispatch, getClientId, selectedData] = ClientContainerHook();

    return (
        <div>
            <Container>
                <Row className='my-5'>
                    <Col md='6'>
                        <ClientList isloading={isloading} comments={comments} deleteClient={deleteClient} dispatch={dispatch} getClientId={getClientId} />
                    </Col>
                    <Col md='6'>
                        <ClientInfo selectedData={selectedData} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ClientContainer