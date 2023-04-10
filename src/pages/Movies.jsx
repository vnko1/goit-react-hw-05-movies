import SearchForm from 'components/searchForm/SearchForm';
import MoviesList from 'components/trandingList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchMovies, normalizeMovies } from 'services';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;
    const controller = new AbortController();
    const params = {
      controller,
      fetchParams: 'search/movie',
      query: searchQuery,
    };

    fetchMovies(params)
      .then(response => {
        console.log(response);
        const movies = normalizeMovies(response.results);
        setMovies(movies);
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, [searchQuery]);

  return (
    <div>
      <SearchForm getQuerySearch={setSearchQuery} />
      <MoviesList movies={movies} />
    </div>
  );
};

export default Movies;
