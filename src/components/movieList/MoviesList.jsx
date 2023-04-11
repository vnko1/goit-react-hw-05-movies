import { useLocation } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
import {
  List,
  Item,
  ImageWrapper,
  NavLink,
  ProgressBarContainer,
  Progressbar,
} from './MovieList.styled';
const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ title, id, poster, averageVote }) => {
        return (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <ImageWrapper>
                <img src={poster} alt={title} width="300px" />
                <ProgressBarContainer>
                  <Progressbar value={averageVote} text={`${averageVote}%`} />
                </ProgressBarContainer>
              </ImageWrapper>
              <h2>{title}</h2>
            </NavLink>
          </Item>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      averageVote: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;
