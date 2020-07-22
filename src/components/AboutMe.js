import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import JTImg from '../assets/jtImg.png';

function AboutMe() {
    return(
        <Container fluid style={{backgroundColor: '#3acabb', paddingLeft: '0'}}>
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <Image fluid src={JTImg} />
                </Col>
                <Col xs={12} md={6}>
                        <h1 className="px-3 display-4">José Saldaña</h1>
                        <h5 className="px-3 font-italic">Entrenador y conferencista</h5>
                        <p className="px-3 lead text-justify">Tengo la visión de apoyar a seres humanos en el desarrollo personal y de conciencia, con el objetivo de que juntos podamos aprender a ser mejores cada día, ya que si cambiamos nosotros, podemos hacer que las cosas cambien y así contribuir cada uno a convertir el mundo en un lugar mejor para vivir y dejarles un mejor mundo a los nietos de nuestros nietos. Para esto he creado entrenamientos y herramientas con las que vamos revolucionar el desarrollo de conciencia, necesito aliados que se quieran entrenar en su vida para que sean parte de esta visión y que una vez entrenados cada quien desde su trinchera haga que el mundo cambie. Pide informes y súmate a la visión de crear juntos el mundo que queremos para nuestras próximas generaciones, la única manera de cambiar el mundo es empezar por nosotros mismos. ¡Toma acción AHORA!</p>
                </Col>
            </Row>
        </Container>
    )
    
}
                    
export default AboutMe