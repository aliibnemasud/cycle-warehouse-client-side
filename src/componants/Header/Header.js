import React from 'react';
import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

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
        <Navbar collapseOnSelect className='fixed-top' expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Cycle Warehourse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">                    
                    <Nav className='ms-auto'>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/inventory">Inventory</Nav.Link>
                        <Nav.Link href="/manageinventory">Manage Inventory</Nav.Link>

                        {user?.uid ? <button className='btn btn-warning signBtn' onClick={logout}>Sign Out</button> :<Link to="/signin" className='btn btn-success signBtn'>Sign In</Link>}
                        
                        {/* <Nav.Link eventKey={2} href="#memes">Somthing</Nav.Link>
                        <NavDropdown title="Ali Ibne Masud" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;