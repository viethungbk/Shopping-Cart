import React, { Component } from 'react';
import * as MSG from "../../constants/Message";


class MessageWishListEmpty extends Component {

    render() {
        return (
            <tr>
                <td>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <h3 className="messageCartEmpty">
                            {MSG.MSG_WISH_LIST_EMPTY}
                        </h3>
                    </div>
                </td>
            </tr>
        );
    }

}


export default MessageWishListEmpty;


