import './Header.css';
import { Col, Row } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <Row className='center-align flex-column background'>
      <Col>
        <div className='center-align text-light pt-2'>
          <h2>React Employee Directory</h2>
        </div>
        <div className='center-align text-light pb-2'>
          Click on carrots to filter by heading or use the search box to narrow your results.
        </div>
      </Col>
    </Row>
  );
}

export default Header;
