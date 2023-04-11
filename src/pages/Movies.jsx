import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/movieList/MoviesList';
import Message from 'components/toast/Toast';
import Loader from 'components/loader/Loader';
import { fetchMovies, normalizeMovies } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

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

    setShowLoader(true);
    fetchMovies(params)
      .then(response => {
        if (!response.results.length) toast.error('Nothing found!');
        const movies = normalizeMovies(response.results);
        setMovies(movies);
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
  }, [query, setShowLoader]);

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
