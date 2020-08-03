import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from '../assets/logo.png'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

class NavBar extends Component{
    scrollToTop = () => {
        scroll.scrollToTop();
    }
    render(){
        return(
            <Navbar sticky="top" expand="md" bg="light" variant="light">
                    <Navbar.Brand className="align-middle" style={{ cursor: 'pointer'}} onClick={this.scrollToTop}>
                        <img src={ Logo }
                         width="90"
                         height="45"
                         className="d-inline-block align-top"
                         alt="Logo Jose Saldana"/>{' '}
                    </Navbar.Brand>
                    <Nav className="ml-3">
                        <Link
                        activeClass=""
                        to="about"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={600} 
                        className="nav-link"
                        role="button">
                            Sobre mí
                        </Link>
                        <Link
                        to="coaching"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={600} 
                        href="#"
                        className="nav-link"
                        role="button">
                            Entrenamientos
                        </Link>
                        <Link
                        to="testimonials"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={600} 
                        href="#"
                        className="nav-link"
                        role="button">
                            Testimonios
                        </Link>
                        <Link
                        activeClass="active"
                        to="contact"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={600} 
                        href="#"
                        className="nav-link"
                        role="button">
                            Contacto
                        </Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link id="nIcon" href="https://www.facebook.com/josememosaldana">
                            <FaFacebook size={22} />
                        </Nav.Link>
                        <Nav.Link id="nIcon" href="https://www.instagram.com/josememosaldana/">
                            <FaInstagram size={22} />
                        </Nav.Link>
                        <Nav.Link id="nIcon" href="https://www.youtube.com/channel/UC2kX4wwbRbqTmtcsZch4Zgw?view_as=subscriber">
                            <FaYoutube size={22} />
                        </Nav.Link>
                        <Nav.Link id="nIcon" href="https://twitter.com/josememosaldana">
                            <FaTwitter size={22} />
                        </Nav.Link>
                        <Nav.Link id="nIcon" href="https://www.linkedin.com/in/josememosaldana">
                            <FaLinkedin size={22} />
                        </Nav.Link>
                    </Nav>
                </Navbar>
        )
    }
}

export default NavBar