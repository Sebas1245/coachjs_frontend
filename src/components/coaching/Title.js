import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Title(){
    return(
        <Container  className="py-5" style={{backgroundColor: 'black'}} fluid>
            <Row className="justify-content-center">
                <h1 className="text-white display-4">Entrenamientos vivenciales</h1>
            </Row>
            <Row className="justify-content-center">
                <h5 className="text-white font-weight-light">Desarolla todo tu potencial</h5>
            </Row>
        </Container>
    )
}

export default Title