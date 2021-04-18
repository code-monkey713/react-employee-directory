import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          <SearchBar />
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
