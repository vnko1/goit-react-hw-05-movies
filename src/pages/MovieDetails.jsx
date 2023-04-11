import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from 'components/movieInfo/MovieInfo';
import Message from 'components/toast/Toast';
import Loader from 'components/loader/Loader';
import useFetch from 'services/hooks';

const MovieDetails = () => {
  const { movie, fetchMovie, showLoader } = useFetch();
  const { current: fetch } = useRef(fetchMovie);
  const { moviesId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  return (
    <>
      {showLoader && <Loader />}
      {movie && <MovieInfo movie={movie} />}
      <Message />
    </>
  );
};

export default MovieDetails;
