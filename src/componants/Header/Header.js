import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
import logo from '../img/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth)
        .then(()=> {
            navigate('/')
        })

    }
    return (
        <Navbar collapseOnSelect className='py-2' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">                    
                    <Nav className='ms-auto navbar-links'>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                                                
                        {user?.uid ? <button className='btn btn-warning signBtn ml-3' onClick={logout}>Sign Out</button> : <Link to="/signin" className='btn btn-success signBtn ml-3'>Sign In</Link>}                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;