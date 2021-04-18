import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import TableEmployee from './components/TableEmployee';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          <TableEmployee />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
