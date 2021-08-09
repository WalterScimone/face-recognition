//import dependencies...
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'

//react function...
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Facial wreck</h1>
      </header>
      <main>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="6">
              <h1>Test person form</h1>
            </Col>
            <Col md="6">
              <h1>Add person form</h1>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        Page created by Walter Scimone
      </footer>
    </div>
  );
}

export default App;