import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const NavbarHeader = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><div className="container">
                    <Header/>
                </div></Navbar.Brand>
    
                    <Button variant="dark" me-2> PM
                    </Button>
                    <Button variant="light" m-2> AM
    </Button>
      </Container>
            </Navbar>
            
        </>
    )

};

export default NavbarHeader;

