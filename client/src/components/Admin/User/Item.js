import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    const { user, index } = this.props;

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>
          <img src={ user.avatar.substring(2) } alt="user img" />
        </td>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>Phone number</td>
        <td><button type="button" className="btn btn-danger" onClick={() => this.props.onDeleteUser(index)}>Xóa</button></td>
      </tr>
    )
  }
}
