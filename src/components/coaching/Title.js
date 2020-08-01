import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function Title(){
    return(
        <Container  className="py-5" style={{backgroundColor: 'black'}} fluid>
            <Row className="justify-content-center px-auto">
                <h1 style={{fontSize: '5vw'}} className="text-center text-white display-4 px-auto">Entrenamientos vivenciales</h1>
            </Row>
            <Row className="justify-content-center">
                <h5 style={{fontSize: '2vw'}} className="text-white font-weight-light px-auto">Desarolla todo tu potencial</h5>
            </Row>
        </Container>
    )
}

export default Title