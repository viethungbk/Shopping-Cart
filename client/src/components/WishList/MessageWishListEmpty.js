import React, { Component } from 'react';

class MessageWishListEmpty extends Component {

	render() {
		return (
			<tr>
				<td>
					<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
						<h3 className="alert alert-warning">
							Chưa có sản phẩm nào trong wishlist
						</h3>
					</div>
				</td>
			</tr>
		);
	}

}


export default MessageWishListEmpty;


