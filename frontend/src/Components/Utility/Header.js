import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import home from '../../Assets/images/home.png'
import userIcon from '../../Assets/images/user-icon.png'
import "../../Styles/Header.css"
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Container>
                <div className='nav_wrapper'>
                    <Navbar.Brand className='logo'>
                        <div className='logoImg'>
                            <Link to='/'>
                                <img src={home} alt="" />
                            </Link>
                        </div>
                        <div className='logoText'>yourClinc</div>
                    </Navbar.Brand>
                    <Nav className="navMenu">
                        <ul className='profile_img'>
                            <li>
                                <Link to='/client' className='bookAppointment'>Book Appointment</Link>
                            </li>
                            <li>
                                <Link to='/doc'>
                                    <img src={userIcon} alt='' />
                                </Link>
                            </li>
                        </ul>
                    </Nav>
                </div>
            </Container>
        </Navbar>  
    )
}

export default Header