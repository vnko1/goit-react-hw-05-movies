import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieInfo = ({ movie }) => {
  const { date, title, tagline, poster_path, popularity, genreList, overview } =
    movie;
  const location = useLocation();
  const currentLocation = { ...location };
  const name = currentLocation?.state?.from?.pathname;
  const search = currentLocation?.state?.from?.search;

  return (
    <>
      {' '}
      <div>
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
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast" state={{ from: { pathname: name, search } }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: { pathname: name, search } }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default MovieInfo;
