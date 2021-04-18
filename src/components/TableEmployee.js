import { Component } from 'react';
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';

class TableEmployee extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      columns: [
        {
          label: 'Image',
          field: 'image',
          sort: 'asc',
          width: 150,
        },
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Phone',
          field: 'phone',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'Email',
          field: 'email',
          sort: 'asc',
          width: 200,
        },
        {
          label: 'DOB',
          field: 'dob',
          sort: 'asc',
          width: 200,
        },
      ],
    };
  }

  formatDate(dateString) {
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }

  uponRefresh = async () => {
    const url = `https://randomuser.me/api/?results=200&nat=us`;

    await axios
      .get(url)
      .then((res) => {
        let employeeData = [];
        for (let i = 0; i < res.data.results.length; i++) {
          const singleEmployee = {
            image: [<img src={res.data.results[i].picture.thumbnail} alt="" />],
            name: `${res.data.results[i].name.first} ${res.data.results[i].name.last}`,
            phone: res.data.results[i].phone,
            email: res.data.results[i].email,
            dob: this.formatDate(res.data.results[i].dob.date),
          };
          employeeData.push(singleEmployee);
        }
        this.setState({
          employees: employeeData,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  componentDidMount() {
    this.uponRefresh();
  }

  render() {
    return (
      <MDBDataTable
        data={{ columns: this.state.columns, rows: this.state.employees }}
        sorting="true"
      />
    );
  }
}

export default TableEmployee;
