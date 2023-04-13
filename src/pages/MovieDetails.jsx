import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from 'components/movieInfo/MovieInfo';
import Message from 'components/toast/Toast';
import Loader from 'components/loader/Loader';
import useFetch from 'services/hooks';
import { STATUS } from 'services';

const MovieDetails = () => {
  const { movie, fetchMovie, status, contentIsLoading, setContentIsLoading } =
    useFetch();
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
      {contentIsLoading && <Loader />}
      {status === STATUS.resolved && (
        <MovieInfo
          movie={movie}
          setContentIsLoading={setContentIsLoading}
          contentIsLoading={contentIsLoading}
        />
      )}
      <Message />
    </>
  );
};

export default MovieDetails;
