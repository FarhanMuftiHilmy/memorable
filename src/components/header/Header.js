import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar >
            <Navbar.Brand className="ml-8">Memorable</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit' }}>Quote</Link></Nav.Link>
                    <Nav.Link><Link to="/gallery" style={{ color: 'inherit', textDecoration: 'inherit' }}>Gallery</Link></Nav.Link>
                    <Nav.Link><Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>Profile</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
