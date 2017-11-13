import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { times as _times} from 'lodash';

export default class OtherPaginator extends Component {
  state = {
    currentPage: 1
  }

  handleButtonClick = (event, pageNumber) => {
    event.preventDefault();
    this.setState({ currentPage: pageNumber });
    this.props.onPaginate(pageNumber);
    window.scrollTo(0, 0)
  }

  isDisable = (pageNumber) => {
    return (this.state.currentPage == pageNumber);
  }

  render() {
    let pages = _times(this.props.totalPages);
    pages.shift();
    return(
      <div className="main-div">
        {pages.map(pageNumber =>
          <span className="page-span" key={pageNumber}>
            <button disabled={this.isDisable(pageNumber)} onClick={(event) => this.handleButtonClick(event, pageNumber)}>
              {pageNumber}
            </button>
          </span>
        )}
      </div>
    );
  }
}
// {props.movies.results.map(movie =>
//   <Movie key={movie.id} movie={movie} />
// )}
