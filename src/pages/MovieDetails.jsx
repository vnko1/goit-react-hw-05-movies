import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MovieInfo from 'components/movieInfo/MovieInfo';
import Message from 'components/toast/Toast';

import ImageLoader from 'components/loader/ImageLoader';
import useFetch from 'services/hooks';

const MovieDetails = () => {
  const { movie, fetchMovie, isLoading, setIsLoading } = useFetch();
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
      {isLoading && <ImageLoader />}
      {movie && <MovieInfo movie={movie} setIsLoading={setIsLoading} />}
      <Message />
    </>
  );
};

export default MovieDetails;
