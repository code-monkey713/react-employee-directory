import { Col, Row } from 'react-bootstrap';

const Header = () => {
  return (
    <Row className='center-align flex-column background header'>
      <Col>
        <div className='center-align text-light pt-2'>
          <h2>React Employee Directory</h2>
        </div>
        <div className='center-align text-light pb-2'>
          Click on the column headers to sort or use the search box to narrow your results.
        </div>
      </Col>
    </Row>
  );
}

export default Header;
