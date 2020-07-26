import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Parallax} from 'react-parallax';
import adp from '../../assets/trainings/adp.png';
import exp from '../../assets/trainings/expirituality.png';
import visiones from '../../assets/trainings/visiones.png';

function Trainings() {
    const trainings = [
        {
            id: 1,
            title: 'Academia del poder', 
            description: 'El entrenamiento tiene como objetivo reencontrarte con tu poder personal, vivir desde el SER, aprendiendo a crear contextos ganadores, de urgencia y de propósito en la vida. Durante el entrenamiento tienes la posibilidad de descubrir las creencias sobre sí mismo que te han llevado a convertirse en el ser humano que eres.  Además tienes la posibilidad de visualizar claramente los resultados que deseas que se conviertan el próximo nivel de tu vida, la mejor versión de ti mismo.',
            img: adp 
        },
        {
            id: 2,
            title: 'Expirituality',
            description: 'El entrenamiento Expirituality, te permite experimentar y crear nuevas posibilidades de SER. Durante el entrenamiento, podrás adquirir las distinciones que te permiten SER el SER HUMANO que tu ERES y aprender a enfocarte en CREAR contextos para aparecer resultados como magia, aprender a aceptar tu vida al 100% y crear una plataforma de espiritualidad para acceder a la paz, el amor y la magia que es estar vivo, a transformar tu vida, en una vida donde tu eres el Co-creador de tu experiencia y de tus resultados y de la manera que te relaciones con ellos, con la vida, contigo mismo, con tu existencia. Atrévete a ir al próximo nivel de tu vida, una vida con propósito, tu propio camino de corazón.',
            img: exp
        },
        {
            id: 3,
            title: 'Visiones',
            description: 'Alinear la Visión Personal con la Visión de la empresa para crear un juego de ganar ganar, donde el participante vea a su empresa como un vehículo para lograr sus metas personales de tal forma que esto genere un vínculo poderoso para alcanzar las metas.',
            img: visiones
        }
    ]
    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };
    const items = trainings.map( training => {
        if(training.id % 2 == 0) {
            return( 
                <Row className="align-items-center justify-content-center" noGutters="true" key={training.id}>
                    <Col xs={6} className="px-5">
                        <div className="text-center">
                            <h4 className="text-uppercase">{training.title}</h4>
                            <p className="lead">{training.description}</p> 
                        </div>
                    </Col>
                    <Col xs={6}>
                        <Parallax bgImage={training.img} strength={250}>
                            <div style={{height: 500}} >
                                <div style={{insideStyles}}> </div>
                            </div>
                        </Parallax>
                    </Col>
                </Row>
            )
        } else {
            return(
                <Row className="align-items-center justify-content-center" noGutters="true" key={training.id}>
                    <Col xs={6}>
                        <Parallax bgImage={training.img} strength={250}>
                            <div style={{height: 600}} >
                                <div style={{insideStyles}}> </div>
                            </div>
                        </Parallax>
                    </Col>
                    <Col xs={6} className="px-5">
                        <div className="text-center">
                            <h4 className="text-uppercase">{training.title}</h4>
                            <p className="lead">{training.description}</p> 
                        </div>
                    </Col>
                </Row>
            )
        } 
    })
    return (
        <Container fluid style={{paddingLeft: '0', paddingRight: '0'}}>
            {items}
        </Container>
    )
}

export default Trainings