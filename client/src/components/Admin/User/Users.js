import React, { Component } from 'react';
import callApi from '../../../apiCaller';
import Item from './Item';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }
  componentDidMount() {
    const headers = {
      'Authorization': localStorage.getItem('token')
    }

    callApi('api/users', 'get', headers, null)
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }

  showUsers() {
    const { users } = this.state;

    let listUsers = users.map((user, index) => {
      return <Item key={ index } index={ index } user={ user }></Item>;
    });

    return listUsers;
  }

  render() {
    return (
      <div className="">
        <h1 className="page-header">Users</h1>

        <h2 className="sub-header">User</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#id</th>
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              { this.showUsers() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
