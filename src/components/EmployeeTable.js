import './EmployeeTable.css';
import { Col, Row } from 'react-bootstrap';
// import { Component } from 'react';
// import { useState } from 'react';
// import { useTable } from 'react-table';

const EmployeeTable = (props) => {
  // const [data, setData] = useState([]);

  


//   const setState = {
//     employees: [],
//     columns: [
//       {
//         label: "Image",
//         field: "image",
//         sort: "asc",
//         width: 150,
//       },
//       {
//         label: "Name",
//         field: "name",
//         sort: "asc",
//         width: 200,
//       },
//       {
//         label: "Phone",
//         field: "phone",
//         sort: "asc",
//         width: 200,
//       },
//       {
//         label: "Email",
//         field: "email",
//         sort: "asc",
//         width: 200,
//       },
//       {
//         label: "DOB",
//         field: "dob",
//         sort: "asc",
//         width: 200,
//       },
//     ],
//   };

  
  return (
    <Row className="center-align flex-column employeeTable">
      <Col>
        This is the start of the employee table. 
      </Col>
    </Row>
  );
};

export default EmployeeTable;
