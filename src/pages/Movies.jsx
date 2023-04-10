import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/movieList/MoviesList';
import { fetchMovies, normalizeMovies } from 'services';

const Movies = () => {
  const [movies, setMovies] = useState([]);
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

    fetchMovies(params)
      .then(response => {
        const movies = normalizeMovies(response.results);
        setMovies(movies);
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div>
      <SearchForm setSearchParams={setSearchParams} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
