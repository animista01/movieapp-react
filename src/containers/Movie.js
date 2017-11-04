import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovie } from '../actions/movies';
import SingleMovie from '../components/SingleMovie';

class Movie extends Component {
  componentWillMount(){
    this.props.fetchMovie(this.props.match.params.id);
  }
  render(){
    return(
      <div>
       <SingleMovie movie={this.props.movie}  />
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
