import React from 'react';
import ContactForm from './ContactForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Contact(){
    return (
        <Container id="contact" className="pt-5" fluid>
            <Row className="justify-content-center">
                <h1 style={{fontSize: '5vw'}} className="text-black display-4 px-auto">Contacto</h1>
            </Row>
            <Row className="justify-content-center">
                <h5 style={{fontSize: '2vw'}} className="text-black font-italic font-weight-light px-auto">Te escucho</h5>
            </Row>
            <Row className="align-items-center justify-content-center mt-3">
                <p style={{fontSize: '1vw'}} ><FaPhone size={18} />  +52 81 8682 7833</p>
            </Row>
            <Row className="align-items-center justify-content-center">
                <p style={{fontSize: '1vw'}} ><FaEnvelope size={18} />    jsal@josesaldana.me</p>
            </Row>
            <ContactForm />
        </Container>
    )
}

export default Contact;