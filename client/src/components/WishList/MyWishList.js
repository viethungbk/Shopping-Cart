import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from "./Product";
import actAddToCart, {actDeleteWishItem} from "./../../actions/index";


class MyWishList extends Component {

   showWishList = (wishList) => {
      let result = [];
      let { onAddToCart, onDeleteWishItem } = this.props;
      result = wishList.map((product, index) => {
         return <Product
            key={index}
            product={product}
            onAddToCart={onAddToCart}
            onDeleteWishItem={onDeleteWishItem}
         />
      });
      return result;
   }

   render() {
      let { wishList } = this.props;
      return (
         <div className="my-wishlist-page">
            <div className="row">
               <div className="col-md-12 my-wishlist">
                  <div className="table-responsive">
                     <table className="table">
                        <thead>
                           <tr>
                              <th colSpan={4} className="heading-title">My Wishlist</th>
                           </tr>
                        </thead>
                        <tbody>
                           {this.showWishList(wishList)}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
const mapStateToProps = state => {
   return {
      wishList: state.wishList
   }
}


const mapDispatchToProps = (dispatch, props) => {
   return {
      onAddToCart: (product) => {
         dispatch(actAddToCart(product, 1));
      },
      onDeleteWishItem: (product)=> {
         dispatch(actDeleteWishItem(product));
      }
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyWishList);