import MovieInfo from 'components/movieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { fetchMovies, normalizeMovie } from 'services';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}`, controller };
    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, [moviesId]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {movie && <MovieInfo movie={movie} />}
    </div>
  );
};

export default MovieDetails;
