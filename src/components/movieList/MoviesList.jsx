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

const MoviesList = ({ movies, setIsLoading }) => {
  const location = useLocation();

  // const onLoad = index => {
  //   if (index === movies.length - 1) {
  //     setIsLoading(false);
  //   }
  // };

  const onComplete = after(movies.length, () => {
    setIsLoading(false);
  });

  return (
    <List>
      {movies.map(({ title, id, poster, averageVote }, index) => {
        return (
          <Item key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <ImageWrapper>
                <img
                  src={poster}
                  alt={title}
                  width="300px"
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
  setIsLoading: PropTypes.func.isRequired,
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
