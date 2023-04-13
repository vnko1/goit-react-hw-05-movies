import { useLocation } from 'react-router-dom';
import PropTypes, { shape } from 'prop-types';
import { after } from 'underscore';
import {
  List,
  Item,
  ImageWrapper,
  NavLink,
  ProgressBarContainer,
  Progressbar,
} from './MovieList.styled';

const MoviesList = ({ movies, setContentIsLoading, contentIsLoading }) => {
  const location = useLocation();

  const onComplete = after(movies.length, () => {
    setContentIsLoading(false);
  });

  return (
    <List className={!contentIsLoading && 'loaded'}>
      {movies.map(({ title, id, poster, averageVote }) => {
        return (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <ImageWrapper>
                <img
                  src={poster}
                  alt={title}
                  width="300"
                  height="450"
                  onLoad={onComplete}
                  onError={onComplete}
                />
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
  setContentIsLoading: PropTypes.func.isRequired,
  contentIsLoading: PropTypes.bool.isRequired,
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
