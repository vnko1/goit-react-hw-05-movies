import { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import MovieInfo from 'components/movieInfo/MovieInfo';
import Loader from 'components/loader/Loader';
import { fetchMovies, normalizeMovie, useFetch } from 'services';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { errorMessage, setErrorMessage, showLoader, setShowLoader } =
    useFetch();
  const { moviesId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}`, controller };
    setErrorMessage(null);
    setShowLoader(true);

    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
      })
      .catch(error => {
        if (error.message !== 'canceled') setErrorMessage(error.message);
      })
      .finally(() => {
        setShowLoader(false);
      });

    return () => {
      controller.abort();
    };
  }, [moviesId, setErrorMessage, setShowLoader]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      {showLoader && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      {!!errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default MovieDetails;
