import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLink, MovieItem } from './MovieList.styled';
import { shape } from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id }) => {
        return (
          <MovieItem key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </MovieItem>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
