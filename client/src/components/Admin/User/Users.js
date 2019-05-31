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

    callApi('api/users', 'get', null, headers)
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(err => console.log(err));
  }

  onDeleteUser = (index) => {
    let { users } = this.state;
    const userId = users[index]._id;

    console.log(userId);

    users.splice(index, 1);

    this.setState({
      users: users
    });

    const headers = {
      'Authorization': localStorage.getItem('token')
    }

    callApi(`api/users/delete/${userId}`, 'delete', null, headers)
      .then(res => {
        window.alert(res);
        console.log('Deleted User');
      })
      .catch(err => {
        window.alert(err.message);
        console.log(err);
      });
  }

  showUsers() {
    const { users } = this.state;

    if (users.length === 0) {
      return (
        <tr>
          <td>
            <h3 className="alert alert-warning">
              Danh sách người dùng trống
            </h3>
          </td>
        </tr>
      );
    }

    let listUsers = users.map((user, index) => {
      return (
        <Item
          key={index}
          index={index}
          user={user}
          onDeleteUser={(index) => this.onDeleteUser(index)} >
        </Item>);
    });

    return listUsers;
  }

  render() {
    return (
      <div className="">
        <h2 className="page-header">Danh sách người dùng</h2>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#id</th>
                <th>Tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {this.showUsers()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
