import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { actFetchKeySearch } from "./../../../actions/index";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keySearch: ''
    }
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }
  onSubmit = () => {
    this.props.onFetchKeySearch(this.state.keySearch);
    this.setState({
      keySearch: ''
    })
  }

  render() {
    let { keySearch } = this.state;
    return (
      <div className="col-lg-7 col-md-6 col-sm-8 col-xs-12 top-search-holder">
        <div className="search-area">
          <form >
            <div className="control-group">
              <ul className="categories-filter animate-dropdown">
                <li className="dropdown"> <Link className="dropdown-toggle" data-toggle="dropdown" to="/">Thể loại <b className="caret" /></Link>
                  <ul className="dropdown-menu" role="menu">
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">Samsung</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">Apple</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">Huawei</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">Xiaomi</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">LG</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">Asus</Link></li>
                    <li role="presentation"><Link role="menuitem" tabIndex={-1} to="/">Nokia</Link></li>
                  </ul>
                </li>
              </ul>
              <input
                type="text"
                className="search-field"
                name="keySearch"
                value={keySearch}
                onChange={this.onChange}
                placeholder="Tìm kiếm..."
              />
              <Link to="/"
                type="button"
                className="search-button"
                onClick={this.onSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    keySearch : state.keySearch
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchKeySearch: (keySearch) => {
      dispatch(actFetchKeySearch(keySearch));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);