import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Styles/form.scss';

const SignUpForm = () => {

  const [formdata, setData] = useState({
    name:" ",
    email:" ",
    password:" "
  });

  const handleChange = (e)=>{
       setData(e.target.value);
  }

  const handleForm = ()=>{
    console.log([...formdata],formdata)
     
  }
  return (
    <Container>
      <Row>
        <Col md={6} className="sign-up-form">
          <h2>Sign Up</h2>
          <Form>
            
            <hr />
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" value={formdata.value} onChange={handleChange} placeholder="Your Name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Your E-mail</Form.Label>
              <Form.Control type="email" value={formdata.email} onChange={handleChange} placeholder="Your E-mail" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={formdata.value} onChange={handleChange} placeholder="At least 8 characters" />
            </Form.Group>
            
            <Button variant="primary" type="submit" block onSubmit={handleForm}>
              Submit
            </Button>
            <Form.Text className="text-muted">
              Have an account? <a href="/login">Log in</a>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
