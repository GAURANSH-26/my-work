import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  return (
    <Container>
      <Row>
        <Col md={6} className="sign-up-form">
          <h2>Login</h2>
          <Form>
           
            <hr />
            
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
             Dont't Have an account? <a href="/login">Sign Up</a>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormGroupExample;