import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MainContainer, Container, NavLink } from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { date, title, tagline, poster, popularity, genre, overview } = movie;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const currentLocation = { ...location };
  const name = currentLocation?.state?.from?.pathname;
  const search = currentLocation?.state?.from?.search;

  return (
    <MainContainer>
      <NavLink to={backLinkHref}>Go back</NavLink>
      <Container>
        <img src={poster} alt={tagline} />
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
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: { pathname: name, search } }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: { pathname: name, search } }}>
              Reviews
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </MainContainer>
  );
};

MovieInfo.propTypes = {
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
