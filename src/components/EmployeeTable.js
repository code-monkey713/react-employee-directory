import './EmployeeTable.css';
import { Col, Row } from 'react-bootstrap';

const EmployeeTable = () => {
  return (
    <Row className="center-align flex-column background EmployeeTable">
      <Col>
        <div className="center-align text-light pt-2">
          <h2>React Employee Directory</h2>
        </div>
        <div className="center-align text-light pb-2">
          Click on carrots to filter by heading or use the search box to narrow
          your results.
        </div>
      </Col>
    </Row>
  );
};

export default EmployeeTable;
