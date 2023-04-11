import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import MoviesList from 'components/movieList/MoviesList';
import Loader from 'components/loader/Loader';
import Message from 'components/toast/Toast';
import { fetchMovies, normalizeMovies } from 'services';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: 'trending/movie/week', controller };
    fetchMovies(params)
      .then(response => {
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
  }, []);

  return (
    <>
      {showLoader && <Loader />}
      {!!movies.length && <MoviesList movies={movies} />}
      <Message />
    </>
  );
};

export default Home;
