import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
// import SearchBar from './components/SearchBar';
// import EmployeeTable from './components/EmployeeTable';
import TableEmployee from './components/TableEmployee';

const App = () => {
  return (
    <Container fluid>
      <Header />
      <Row>
        <Col>
          {/* <SearchBar /> */}
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <EmployeeTable /> */}
          <TableEmployee />
        </Col>
      </Row>
      {/* <Footer /> */}
    </Container>
  );
}

export default App;
