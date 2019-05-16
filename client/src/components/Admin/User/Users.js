import React, { Component } from 'react';

export default class Users extends Component {
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
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Blabla</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
