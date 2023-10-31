import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import  OwnersAndBooks from './booksmanager/ownersAndBooks'

function Home() {

    return (
        <Container>
            <Row>
                <Col><OwnersAndBooks></OwnersAndBooks></Col>
            </Row>
        </Container>
    )

}

export default Home

