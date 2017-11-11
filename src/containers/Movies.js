import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetch as fetchMovies, searchMovie } from '../actions/movies';
import Home from '../components/Home';

export class Movies extends Component {
  state = {
    type: "popular",
    query: ''
  }
  componentWillMount(){
    this.props.fetchMovies();
  }
  handleSelectList = (event, type) => {
    event.preventDefault();
    this.setState({ type: type });
    this.props.fetchMovies(type);
  }

  handleOnSearch = (event) => {
    if (event.target.value != "") {
      this.props.searchMovie(event.target.value);
    } else {
      this.props.fetchMovies();
    }
  }

  handlePagination = (pageNumber) => {
    console.log(".pageNumber--->", pageNumber);
    this.props.fetchMovies(this.state.type, pageNumber);
  }

  render(){
    return(
      <Home
        movies={this.props.movies}
        query={this.state.query}
        handlePagination={this.handlePagination}
        handleSelectList={this.handleSelectList}
        handleOnSearch={this.handleOnSearch}
      />
    )
  }
}

const mapStateToProps = _state => {
  const moviesList = _state.movies;
  const { movies } = moviesList;
  return {
    movies
  }
}

const mapDispatchToProps = _dispatch => {
  return {
    fetchMovies: bindActionCreators(fetchMovies, _dispatch),
    searchMovie: bindActionCreators(searchMovie, _dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
