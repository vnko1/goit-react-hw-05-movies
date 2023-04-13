import { useEffect, useRef } from 'react';
import MoviesList from 'components/movieList/MoviesList';
import NetflixLoader from 'components/loader/NetflixLoader';
import Message from 'components/toast/Toast';
import useFetch from 'services/hooks';
import { STATUS } from 'services';

const Home = () => {
  const {
    movies,
    fetchMoviesList,
    status,
    contentIsLoading,
    setContentIsLoading,
  } = useFetch();
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
      {contentIsLoading && <NetflixLoader />}
      {status === STATUS.resolved && !!movies.length && (
        <MoviesList
          movies={movies}
          contentIsLoading={contentIsLoading}
          setContentIsLoading={setContentIsLoading}
        />
      )}
      <Message />
    </>
  );
};

export default Home;
