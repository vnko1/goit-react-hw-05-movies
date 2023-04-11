import { useEffect, useRef } from 'react';
import MoviesList from 'components/movieList/MoviesList';
import Loader from 'components/loader/Loader';
import Message from 'components/toast/Toast';
import useFetch from 'services/hooks';

const Home = () => {
  const { movies, showLoader, fetchMoviesList } = useFetch();
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
      {showLoader && <Loader />}
      {!!movies.length && <MoviesList movies={movies} />}
      <Message />
    </>
  );
};

export default Home;
