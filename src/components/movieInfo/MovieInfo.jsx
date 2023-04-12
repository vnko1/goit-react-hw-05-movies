import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MainContainer,
  Container,
  PageLink,
  InfoContainer,
} from './MovieInfo.styled';

const MovieInfo = ({ movie, setIsLoading }) => {
  const { date, title, tagline, poster, popularity, genre, overview } = movie;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const currentLocation = { ...location };
  const name = currentLocation?.state?.from?.pathname;
  const search = currentLocation?.state?.from?.search;

  const onComplete = () => setIsLoading(false);

  return (
    <MainContainer>
      <PageLink to={backLinkHref}>Go back</PageLink>
      <Container>
        <img
          src={poster}
          alt={tagline}
          onLoad={onComplete}
          onError={onComplete}
        />
        <div>
          <div>
            <h1>{title}</h1>
            <p>{`${date}`}</p>
          </div>
          <p>Popularity: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genre}</p>
        </div>
      </Container>
      <InfoContainer>
        <h2>Additional information</h2>
        <ul>
          <li>
            <PageLink to="cast" state={{ from: { pathname: name, search } }}>
              Cast
            </PageLink>
          </li>
          <li>
            <PageLink to="reviews" state={{ from: { pathname: name, search } }}>
              Reviews
            </PageLink>
          </li>
        </ul>
        <Outlet />
      </InfoContainer>
    </MainContainer>
  );
};

MovieInfo.propTypes = {
  setIsLoading: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    popularity: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfo;
