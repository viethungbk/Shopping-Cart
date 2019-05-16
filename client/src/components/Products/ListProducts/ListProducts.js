import React, { Component } from 'react';
import Product from './Product';
import ProductCategory from './ProductCategory';
import callApi from '../../../apiCaller';
import { connect } from 'react-redux';
import actFetchKeySearch from '../../../actions/index';


class ListProducts extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      products: []
    };
  }

  componentWillMount(){
    console.log("goi act dispatch");
    
    this.props.onFetchKeySearch("key Search");
  }
  
  componentDidMount() {
    console.log(this.props.keySearch);
    console.log('hi');
    callApi('api/products/', 'get', null)
    .then(res => {
      this.setState({
        products: res.data
      });
    })
    .catch(err => console.log(err));
  }
  
  showProducts() {
    const products = this.state.products;
    console.log('product: ', products);
    
    let listProducts = products.map(product => {
      return <Product key={product._id} product={product}></Product>;
    });
    
    return listProducts;
  }
  
  render() {
    console.log('render');
    return (
      <div id="product-tabs-slider" className="scroll-tabs outer-top-vs">
        <ProductCategory>
          {this.props.children}
        </ProductCategory>
        <div className="tab-content outer-top-xs">
          <div className="tab-pane in active" id="all">
            <div className="product-slider">
            {/* owl-carousel home-owl-carousel custom-carousel owl-theme */}
              {/* <div className="owl-carousel home-owl-carousel custom-carousel owl-theme"> */}
              <div className = "col-md-12">
                { this.showProducts() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    keySearch : state.keySearch
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchKeySearch: (keySearch) => {
      dispatch(actFetchKeySearch(keySearch));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);