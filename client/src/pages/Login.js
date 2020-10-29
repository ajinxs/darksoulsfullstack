import React from 'react'
import { Form, Button, Figure } from 'react-bootstrap';
import LoginImage from '../images/dsmain9.jpg';
import FooterBar from './Footer.js';

const login = () =>(
    <div className="container" style={{textAlign: "center", marginTop:'10rem', border:'solid', padding:'2rem'}}>
        
        <Figure>
        <Figure.Image
        width={1000}
        height={100}
        alt="LoginImage"
        src={LoginImage}
        />
        </Figure>

        <Form>
            <Form.Group controlId="formBasicEmail">

                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        <FooterBar/>
    </div>
)

export default login;