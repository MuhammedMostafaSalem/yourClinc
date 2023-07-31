import React from 'react'
import {Navbar, Container, Nav, NavLink} from 'react-bootstrap'
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
                            <img src={home} alt="" />
                        </div>
                        <div className='logoText'>yourClinc</div>
                    </Navbar.Brand>
                    <Nav className="navMenu">
                        <ul className='profile_img'>
                            <li>
                                <NavLink className='bookAppointment'>Book Appointment</NavLink>
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