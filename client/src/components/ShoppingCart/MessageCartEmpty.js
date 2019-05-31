import React, { Component } from 'react';

import * as MSG from '../../contants/Messages';


class MessageCartEmpty extends Component {

  render() {

    return (
      <tr>
        <td>
          <h3 className="alert alert-warning">
            {MSG.MSG_CART_EMPTY}
          </h3>
        </td>
      </tr>
    );
  }

}


export default MessageCartEmpty;


