import React, { Component } from 'react';
import * as MSG from "./../../constants/Message";


class MessageCartEmpty extends Component {

    render() {

        return (
            <tr>
                <td>
                    <h3 className="messageCartEmpty">
                        {MSG.MSG_CART_EMPTY}
                    </h3>
                </td>
            </tr>
        );
    }

}


export default MessageCartEmpty;


