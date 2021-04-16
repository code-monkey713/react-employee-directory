import './Footer.css';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Row className='center-align flex-column background footer'>
      <Col>
        <div className='center-align text-light pt-2 pb-2'>
        ✨© Tony Tran ©✨
        </div>
      </Col>
    </Row>
  );
}

export default Footer;
