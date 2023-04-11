import { useState } from 'react';
import { fetchMovies } from './API';
import { normalizeMovies } from './funcs';
import toast from 'react-hot-toast';

const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const fetchMovieList = params => {
    setShowLoader(true);
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
  };
  return { movies, fetchMovieList, showLoader };
};

export default useFetch;
