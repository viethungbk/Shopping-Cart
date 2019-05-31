import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { user, index } = this.props;

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.address ? user.address : ''}</td>
        <td><button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteUser(index)}>Xóa</button></td>
      </tr>
    )
  }
}
