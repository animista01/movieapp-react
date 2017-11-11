import React from 'react';
import Movie from '../components/MovieItem';
import Search from '../components/Search';
import HeaderMenu from '../components/HeaderMenu';
import Paginator from '../components/Paginator';
import OtherPaginator from '../components/OtherPaginator';
import PropTypes from 'prop-types';

const Home = (props) => {

  return(
    <div>
      <HeaderMenu onSelectList={props.handleSelectList} />
      <Search value={props.query} onSearch={props.handleOnSearch} />
      <ul>
        {props.movies.results.map(movie =>
          <Movie key={movie.id} movie={movie} />
        )}
      </ul>
      <Paginator
        totalPages={props.movies.total_pages}
        onPaginate={props.handlePagination}
      />
      <OtherPaginator
      />
    </div>
  );
}
Home.propTypes = {
  movie: PropTypes.array
}
export default Home;
