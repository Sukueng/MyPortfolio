import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./component.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const[colorval,setcolorval]=useState("")

    const handleSetActiveLink = (link) => {
        setcolorval(link);
    };

    return (
        <div className='container  mb-4'>
            <div className="">
                    <h2 className='titile' style={{ color: 'white' }}>Sukumar <span style={{ color: 'orange' }}>Sivasubramaniyam</span></h2>
                </div>
            <Navbar expand="lg" className="headerNav " >
                <Container className='navContainer d-flex justify-content-center'style={{color:'white'}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggle text-center' style={{ color: 'white' }}/>
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="me-auto d-flex  " >
                           
                            <Link className='link-items mt-2 mt-lg-0 mt-md-0' to="/" style={{ color:"white",fontWeight:'bold'}}>Home</Link>
                            <Link className='link-items' to="/about" style={{ color: "white",fontWeight:'bold'}} >About</Link>
                            <Link className='link-items' to="/projects" style={{ color: "white",fontWeight:'bold'}} >Projects</Link>
                            <Link className='link-items' to="/contact" style={{ color:  "white",fontWeight:'bold'}} >Contact</Link>
                        
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        // </div>
        // </div>
    )
}

export default Header
