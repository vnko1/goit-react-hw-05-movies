import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import MovieInfo from 'components/movieInfo/MovieInfo';
import Message from 'components/toast/Toast';
import Loader from 'components/loader/Loader';
import { fetchMovies, normalizeMovie } from 'services';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [showLoader, setShowLoader] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}`, controller };
    setShowLoader(true);
    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      })
      .finally(() => {
        setShowLoader(false);
      });

    return () => {
      controller.abort();
    };
  }, [moviesId, setShowLoader]);

  return (
    <>
      {showLoader && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <Message />
    </>
  );
};

export default MovieDetails;
