import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch as fetchMovies } from '../actions/movies';
import Movie from '../components/MovieItem';
import { bindActionCreators } from 'redux';

export class Movies extends Component {
  state = {
    type: "popular",
    page: 1
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
    let newPage = ++this.state.page;
    console.log(newPage);
    console.log(this.state.type);
    this.props.fetchMovies(this.state.type, newPage);
  }

  onChangePrevPage = (event) => {
    event.preventDefault();
    if (this.state.page > 1) {
      let newPage = --this.state.page;
      console.log(newPage);
      console.log("Go back");
      console.log(this.state.type);
      this.props.fetchMovies(this.state.type, newPage);
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
        <ul>
          {this.props.movies.map(movie =>
            <Movie key={movie.id} movie={movie} />
          )}
        </ul>
        <button onClick={(event) => this.onChangePrevPage(event)}>Prev</button>
        <button onClick={(event) => this.onChangeNextPage(event)}>Next</button>
      </div>
    )
  }
}

const mapStateToProps = _state => {
  const { movies } = _state;
  return {
    movies
  }
}

const mapDispatchToProps = _dispatch => {
  return {
    fetchMovies: bindActionCreators(fetchMovies, _dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Movies);
