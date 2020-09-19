import React from 'react';
import { Container,Row } from 'react-bootstrap';
import Head from './components/Head'
import CntJumbotron from './components/CntJumbotron'
import CntBox1 from './components/CntBox1'
import CntBox2 from './components/CntBox2'
import CntBox3 from './components/CntBox3'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <Container>
        <Head/>
        <CntJumbotron/>
        <Row>
          <CntBox1/><CntBox2/><CntBox3/>
        </Row>
    </Container>
  );
}

export default App;
