import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import caterineCordoba from '../assets/testimonialsImgs/caterineCordoba.jpg'
import huberEsmer from '../assets/testimonialsImgs/huberEsmer.jpg'
import franyAlarcon from '../assets/testimonialsImgs/franyAlarcon.jpg'
import danyRamirez from '../assets/testimonialsImgs/danyRamirez.jpg'


function Testimonials (){
    const testimonials = [
        {
            id: 1,
            name: 'Caterine Córdoba',
            text: 'Gracias a todas estas enseñanzas y a todas las actividades que realizamos durante el entrenamiento, empecé a conocer cosas de mí que no sabía que tenía y a darme cuenta de todo lo que era capaz de lograr. Ese fue el comienzo de mi vida nueva, sé que cambié demasiado y es una historia que siempre cuento cuando me preguntan, ¿cómo superaste tu depresión? y comento que fueron estos entrenamientos que hice contigo.',
            img: caterineCordoba,
        },
        {
            id: 2,
            name: 'Huber Esmer Londoño',
            text: 'Con José Saldaña aprendí a encarar la vida con responsabilidad, a considerar la vida como aquel eco que te escucha y te devuelve lo que pides, en encontrarme y fortalecer mis bondades y administrar con amor y respeto mis debilidades para mitigar los riesgos, encontrar la felicidad a través del uso correcto de lo que tengo y no con el anhelo lacerante de lo que no está.',
            img: huberEsmer,
        },
        {
            id: 3,
            name: 'Frany Alarcón',
            text: 'Gracias al entrenamiento que tuve con José, comencé mi viaje interior y hoy luego de cuatro años continúo transformando mi vida y permitiéndome soñar para poder volar cada vez más alto.',
            img: franyAlarcon,
        },
        {
            id: 4,
            name: 'Dany Ramírez',
            text: 'Las herramientas que recibí, me han ayudado a salir adelante y arriesgarme a lograr todos mis sueños, como estar en este país con idioma y costumbres diferentes a las mías, compartiendo con gente de otros países, y hoy, sentirme que realmente puedo y que lo único que me detiene son mis creencias limitantes.',
            img: danyRamirez,
        },
    ]

    const testimonialCarousel = testimonials.map(testimonial => {
        return testimonial.id % 2 === 0 ? (
            <Carousel.Item key={testimonial.id}>
                <Card className="border-0" style={{backgroundColor: 'transparent'}}>
                    <Row className=" pl-5 h-100">
                        <Col xs={6} className="pl-5 align-self-center">
                            <Card.Body>
                                <blockquote style={{fontSize: '1.3vw'}} className="blockquote text-right">
                                    <p 
                                    className="font-weight-light font-italic text-white">
                                        "{testimonial.text}"
                                    </p>
                                    <footer className="blockquote-footer text-white">
                                        {testimonial.name}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Col> 
                        <Col xs={6}>
                            <Card.Img className="h-100 w-100" src={testimonial.img} />
                        </Col>
                   </Row>
                </Card>
            </Carousel.Item>
        ) :
        (
            <Carousel.Item key={testimonial.id}>
                <Card className="border-0" style={{backgroundColor: 'transparent'}}>
                    <Row>
                        <Col xs={6}>
                            <Card.Img className="h-100 w-100" src={testimonial.img} />
                        </Col>
                        <Col xs={6} className="pr-5 align-self-center">
                            <Card.Body className="w-75">
                                <blockquote style={{fontSize: '1.3vw'}} className="blockquote text-left">
                                    <p className="font-weight-light font-italic text-white">"{testimonial.text}"</p>
                                    <footer className="blockquote-footer text-white">
                                        {testimonial.name}
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Col> 
                   </Row>
                </Card>
            </Carousel.Item>
        )
    })
    return(
        <Container id="testimonials" className="pt-5" style={{backgroundColor: '#3acabb', paddingLeft: '0'}} fluid>
            <Row className="justify-content-center">
                <h1 style={{fontSize: '5vw'}} className="text-black display-4 px-auto">Testimonios</h1>
            </Row>
            <Row className="justify-content-center">
                <h5 style={{fontSize: '2vw'}} className="text-black font-italic font-weight-light px-auto">Lo que piensa la gente</h5>
            </Row>
            <Row className="mt-4" style={{backgroundColor: 'black'}}>
                <Container style={{paddingRight: '0'}} fluid>
                    <Carousel>
                        {testimonialCarousel}
                    </Carousel>
                </Container>
            </Row>
        </Container>
    )
}

export default Testimonials