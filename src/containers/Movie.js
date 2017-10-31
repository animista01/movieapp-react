import React, { Component } from 'react';
import { fetchMovie } from '../actions/movies';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Movie extends Component {
  componentWillMount(){
    this.props.fetchMovie(this.props.match.params.id);
  }
  render(){
    console.log(this.props);
    let movie = this.props.movie;
    let year = new Date(movie.release_date);
    let vote = movie.vote_average * 10;
    let duration = movie.runtime / 60;
    function getFullPath(imageUrl){
      return "https://image.tmdb.org/t/p/w500/" + imageUrl;
    }
    function intToCurrency(number) {
      if (number) {
        return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
      }
    }
    return(
      <div>
        <h1>{movie.title}({year.getFullYear()})</h1>
        <a href={'/movie/' + movie.id}>
          <img src={getFullPath(movie.poster_path)} />
        </a>
        <br />
        <span>Overview: {movie.overview}</span>
        <p>Votes: {vote}%</p>
        <p>Lang: {movie.original_language}</p>
        <span>Genres:
          {movie.genres.map(genre =>
            <p key={genre.id}>{genre.name}</p>
          )}
        </span>
        <p>Duration: {duration}</p>
        <br />
        <span>Keywords:
          {movie.keywords.keywords.map(keyword =>
            <p key={keyword.id}>{keyword.name}</p>
          )}
        </span>
        <br />
        <p>Status: {movie.status}</p>
        <p>Homepage: <a href={movie.homepage}>Homepage</a></p>
        <p>Budget: ${intToCurrency(movie.budget)}</p>
        <p>Revenue: ${intToCurrency(movie.revenue)}</p>
      </div>
    )
  }
}

const mapStateToProps = _state => {
  const movieData = _state.movies
  const { movie } = movieData;

  return {
    movie
  }
}

const mapDispatchToProps = _dispatch => {
  return {
    fetchMovie: bindActionCreators(fetchMovie, _dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);
