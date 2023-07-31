import React, { useState } from 'react'
import {Navbar, Container, Nav, NavLink} from 'react-bootstrap'
import home from '../../Assets/images/home.png'
import userIcon from '../../Assets/images/user-icon.png'
import "../../Styles/Header.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Header = () => {
    // select toggle menu mobile
    const [mobile, setMobile] = useState(false);

    const nav_links = [
        {
            path: '/',
            display: 'Home',
        },
        {
            path: 'services',
            display: 'Services',
        },
        {
            path: 'aboutus',
            display: 'About us',
        },
        {
            path: 'doctor',
            display: 'Doctor',
        },
    ]

    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Container>
                <div className='nav_wrapper'>
                    <Navbar.Brand className='logo'>
                        <div className='logoImg'>
                            <img src={home} alt="" />
                        </div>
                        <div>yourClinc</div>
                    </Navbar.Brand>
                    <Nav className={mobile ? "active_menu" : "navMenu"} onClick={()=> setMobile(true)}>
                        <ul className='menu'>
                            {
                                nav_links.map((item, index) => {
                                    return (
                                        <li key={index} className='nav_item'>
                                            <NavLink to={item.path}>
                                                {item.display}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className='profile_img'>
                            <li>
                                <NavLink className='bookAppointment'>Book Appointment</NavLink>
                            </li>
                            <li>
                                <img src={userIcon} alt='' />
                            </li>
                        </ul>
                    </Nav>

                    <div className='mobile_bar' onClick={()=> setMobile(!mobile)}>
                        <span>
                            {
                                mobile ? <CloseOutlinedIcon className='iconBar'/> : <MenuOutlinedIcon className='iconBar'/>
                            }
                        </span>
                    </div>
                </div>
            </Container>
        </Navbar>  
    )
}

export default Header