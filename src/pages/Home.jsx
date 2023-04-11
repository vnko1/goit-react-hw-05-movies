import { useState, useEffect } from 'react';
import MoviesList from 'components/movieList/MoviesList';
import Loader from 'components/loader/Loader';
import { fetchMovies, normalizeMovies, useFetch } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const { errorMessage, setErrorMessage, showLoader, setShowLoader } =
    useFetch();

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: 'trending/movie/week', controller };
    setErrorMessage(null);
    setShowLoader(true);
    fetchMovies(params)
      .then(response => {
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
  }, [setErrorMessage, setMovies, setShowLoader]);

  return (
    <>
      {showLoader && <Loader />}
      {!!movies.length && <MoviesList movies={movies} />}
      {!!errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default Home;
