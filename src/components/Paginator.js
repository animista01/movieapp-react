import React, { Component }  from 'react';

export default class Paginator extends Component {
  state = {
    currentPage: 1
  }

  handleButtonClick = (event, type) => {
    event.preventDefault();
    let newPage = this.state.currentPage;
    if (type == "back") {
      if (this.state.currentPage > 1) {
        newPage = this.state.currentPage - 1;
      }
    } else {
      newPage = this.state.currentPage + 1;
    }
    console.log(newPage);
    this.setState({ currentPage: newPage });
    this.props.onPaginate(newPage)
  }

  isDisable = () => {
    return (this.state.currentPage == 1);
  }

  render() {
    return(
      <div>
        <span>
        <button disabled={this.isDisable()} onClick={(event) => this.handleButtonClick(event, 'back')}>Prev</button>
        {this.state.currentPage} of {this.props.totalPages}
        <button onClick={(event) => this.handleButtonClick(event, 'next')}>Next</button>
        </span>
        <br />
        <br />
      </div>
    )
  }
}
