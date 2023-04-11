import { useLocation } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { NavLink } from './MovieList.styled';
import { shape } from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ListGroup style={{ paddingTop: '10px' }}>
      {movies.map(({ title, id }) => {
        return (
          <ListGroup.Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLink>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
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
