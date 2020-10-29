import React from 'react';
//import { BrowserRouter as Router, Link, NavLink, Route, Switch } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../images/dslogo.png';

const navigation = () =>{
    return (
        <>
        <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
            <Navbar.Brand href="/">
                <img
                    src={Logo}
                    width="150"
                    height="35"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/product">Product</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/weaponguide">Weapon Guide</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/buildguide">Character Build</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/ringguide">Ring Guide</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>  
        </Navbar>      
        </>
    )
}

export default navigation;
