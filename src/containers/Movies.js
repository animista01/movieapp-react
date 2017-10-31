import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch as fetchMovies, searchMovie } from '../actions/movies';
import Movie from '../components/MovieItem';
import { bindActionCreators } from 'redux';
import Search from '../components/Search';

export class Movies extends Component {
  state = {
    type: "popular",
    page: 1,
    query: ''
  }
  componentWillMount(){
    this.props.fetchMovies();
  }
  onChangeList = (event, type) => {
    event.preventDefault();
    this.setState({ type: type });
    this.props.fetchMovies(type);
  }

  onChangeNextPage = (event) => {
    event.preventDefault();
    let newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.props.fetchMovies(this.state.type, newPage);
  }

  onChangePrevPage = (event) => {
    event.preventDefault();
    if (this.state.page > 1) {
      let newPage = this.state.page - 1;
      this.setState({ page: newPage });
      this.props.fetchMovies(this.state.type, newPage);
    }
  }

  isDisable = () => {
    return (this.state.page == 1);
  }

  handleOnChange = (event) => {
    if (event.target.value != "") {
      this.props.searchMovie(event.target.value);
    } else {
      this.props.fetchMovies();
    }
  }

  render(){
    return(
      <div>
        <ul>
          <li>
            <a onClick={(event) => this.onChangeList(event, 'popular')}>Popular</a>
          </li>
          <li>
            <a onClick={(event) => this.onChangeList(event, 'top_rated')}>Top</a>
          </li>
          <li>
            <a onClick={(event) => this.onChangeList(event, 'upcoming')}>Upcoming</a>
          </li>
          <li>
            <a onClick={(event) => this.onChangeList(event, 'now_playing')}>Now playing</a>
          </li>
        </ul>
        <Search value={this.state.query} onSearch={this.handleOnChange} />
        <ul>
          {this.props.movies.results.map(movie =>
            <Movie key={movie.id} movie={movie} />
          )}
        </ul>
        <span>
          <button disabled={this.isDisable()} onClick={this.onChangePrevPage}>Prev</button>
          {this.state.page} of {this.props.movies.total_pages}
          <button onClick={this.onChangeNextPage}>Next</button>
        </span>
        <br/><br/>
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
