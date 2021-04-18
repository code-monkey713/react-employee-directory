import { Col, Row } from 'react-bootstrap';

const SearchBar = (props) => {
  return (
    <Row className="center-align flex-column">
      <Col>
        <form>
          <div className="form-group center-align">
            <input
              onChange={props.handleInputChange}
              value={props.value}
              name="search"
              type="text"
              className="form-control mt-2"
              placeholder="Search For an employee"
              id="search"
            />
            <hr />
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default SearchBar;
