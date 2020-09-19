import React, { Component } from 'react'
import { Nav,Navbar } from 'react-bootstrap';
 
export default class Head extends Component {
    render() {
        return (
        <>
            <h3 className="text-muted">Project name</h3>
            <Navbar className="">
                <Nav as="ul" className="nav nav-justified">
                    <Nav.Item as="li" className="active">
                        <Nav.Link eventKey="1" href="#">
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="2" href="#">
                            Projects
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="3" href="#">
                            Services
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="4" href="#">
                            Downloads
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="5" href="#">
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link eventKey="6" href="#">
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
        )
    }
}
