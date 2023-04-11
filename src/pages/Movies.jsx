import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/movieList/MoviesList';
import Message from 'components/toast/Toast';
import Loader from 'components/loader/Loader';
import useFetch from 'services/hooks';

const Movies = () => {
  const { movies, fetchMoviesList, showLoader } = useFetch();
  const { current: fetch } = useRef(fetchMoviesList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    fetch({
      controller,
      fetchParams: 'search/movie',
      query,
    });
    return () => {
      controller.abort();
    };
  }, [fetch, query]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {showLoader && <Loader />}
      {!!movies.length && <MoviesList movies={movies} />}
      <Message />
    </>
  );
};

export default Movies;
