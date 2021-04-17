import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          This is where my search bar will be!
        </Col>
      </Row>
      <Row>
        <Col>
          This is where my employee table will be!
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
