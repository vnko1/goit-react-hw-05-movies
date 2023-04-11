import { useLocation } from 'react-router-dom';
import { NavLink, MovieItem } from './MovieList.styled';

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

export default MoviesList;
