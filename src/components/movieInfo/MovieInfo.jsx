import { Outlet, useLocation } from 'react-router-dom';
import { MainContainer, Container, NavLink } from './MovieInfo.styled';

const MovieInfo = ({ movie }) => {
  const { date, title, tagline, poster_path, popularity, genreList, overview } =
    movie;
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const currentLocation = { ...location };
  const name = currentLocation?.state?.from?.pathname;
  const search = currentLocation?.state?.from?.search;

  return (
    <MainContainer>
      <NavLink to={backLinkHref}>Go back</NavLink>
      <Container>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'https://placehold.co/500x750/png'
          }
          alt={tagline}
        />
        <div>
          <div>
            <h1>{title}</h1>
            <p>{date ? `(${date})` : 'No release information'}</p>
          </div>
          <p>Popularity: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{!!genreList.length ? genreList : 'No genre information'}</p>
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

export default MovieInfo;
