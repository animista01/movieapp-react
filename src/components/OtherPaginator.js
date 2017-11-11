import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import {times} from 'lodash';

export default class OtherPaginator extends Component {
  state = {
    currentPage: 1
  }
  render() {
    console.log(this.props.totalPages);
    let pages = times(this.props.totalPages);
    console.log(pages);
    return(
      pages.map(pageNumber =>
        {pageNumber}
      )
    );
  }
}
