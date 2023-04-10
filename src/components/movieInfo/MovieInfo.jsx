import { Link, Outlet, useLocation } from 'react-router-dom';

const MovieInfo = ({ movie }) => {
  const { date, title, tagline, poster_path, popularity, genreList, overview } =
    movie;
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={tagline}
      />
      <div>
        <div>
          <h1>{title}</h1>
          <p>{`(${date})`}</p>
        </div>
        <p>Popularity: {popularity}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p>{genreList}</p>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieInfo;
