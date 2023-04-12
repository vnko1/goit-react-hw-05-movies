import { useEffect, useRef } from 'react';
import MoviesList from 'components/movieList/MoviesList';

import NetflixLoader from 'components/loader/NetflixLoader';
import Message from 'components/toast/Toast';
import useFetch from 'services/hooks';

const Home = () => {
  const { movies, isLoading, setIsLoading, fetchMoviesList } = useFetch();
  const { current: fetch } = useRef(fetchMoviesList);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: 'trending/movie/week', controller });
    return () => {
      controller.abort();
    };
  }, [fetch]);

  return (
    <>
      {isLoading && <NetflixLoader />}
      {!!movies.length && (
        <MoviesList movies={movies} setIsLoading={setIsLoading} />
      )}
      <Message />
    </>
  );
};

export default Home;
