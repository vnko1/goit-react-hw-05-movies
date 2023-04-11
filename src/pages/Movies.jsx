import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/movieList/MoviesList';
import Loader from 'components/loader/Loader';
import { fetchMovies, normalizeMovies, useFetch } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const { errorMessage, setErrorMessage, showLoader, setShowLoader } =
    useFetch();

  const { query } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    const params = {
      controller,
      fetchParams: 'search/movie',
      query,
    };
    setErrorMessage(null);
    setShowLoader(true);
    fetchMovies(params)
      .then(response => {
        setResponse(response.results.length);
        const movies = normalizeMovies(response.results);
        setMovies(movies);
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
  }, [query, setErrorMessage, setShowLoader]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {showLoader && <Loader />}
      {!!movies.length && <MoviesList movies={movies} />}
      {response === 0 && <p>Nothing found</p>}
      {!!errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default Movies;
