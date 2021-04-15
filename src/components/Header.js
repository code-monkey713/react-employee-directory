import './Header.css';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <>
    <Row className='center-align flex-column'>
      <Col>
        <h1>React Employee Directory</h1>
      </Col>
    </Row>
    </>
  );
}

export default Header;
