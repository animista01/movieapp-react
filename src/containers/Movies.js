import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetch as fetchMovies, searchMovie } from '../actions/movies';
import Movie from '../components/MovieItem';
import Search from '../components/Search';
import HeaderMenu from '../components/HeaderMenu';
import Paginator from '../components/Paginator';

export class Movies extends Component {
  state = {
    type: "popular",
    page: 1,
    query: ''
  }
  componentWillMount(){
    this.props.fetchMovies();
  }
  handleOnSelectList = (event, type) => {
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

  handlePagination = (event, type) => {
    event.preventDefault();
    let newPage = this.state.page;
    if (type == "back") {
      if (this.state.page > 1) {
        newPage = this.state.page - 1;
      }
    } else {
      newPage = this.state.page + 1;
    }
    this.setState({ page: newPage });
    this.props.fetchMovies(this.state.type, newPage);
  }

  render(){
    return(
      <div>
        <HeaderMenu onSelectList={this.handleOnSelectList} />
        <Search value={this.state.query} onSearch={this.handleOnSearch} />
        <ul>
          {this.props.movies.results.map(movie =>
            <Movie key={movie.id} movie={movie} />
          )}
        </ul>
        <Paginator page={this.state.page} total_pages={this.props.movies.total_pages} onPaginate={this.handlePagination} />
      </div>
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
