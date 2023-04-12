import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/movieList/MoviesList';
import Message from 'components/toast/Toast';
import NetflixLoader from 'components/loader/NetflixLoader';
import useFetch from 'services/hooks';

const Movies = () => {
  const { movies, fetchMoviesList, isLoading, setIsLoading } = useFetch();
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
      {isLoading && <NetflixLoader />}
      {!!movies.length && (
        <MoviesList
          movies={movies}
          setIsLoading={setIsLoading}
          isLoading={isLoading}
        />
      )}
      <Message />
    </>
  );
};

export default Movies;
