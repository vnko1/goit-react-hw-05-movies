import { useState } from 'react';
import { fetchMovies } from './API';
import {
  normalizeMovies,
  normalizeMovie,
  normalizeCast,
  normalizeReview,
} from './funcs';
import toast from 'react-hot-toast';

const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  const fetchMoviesList = params => {
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
  };

  const fetchMovie = params => {
    setShowLoader(true);
    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      })
      .finally(() => {
        setShowLoader(false);
      });
  };

  const fetchCast = params => {
    fetchMovies(params)
      .then(response => {
        setCast(normalizeCast(response.cast));
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      });
  };

  const fetcReviews = params => {
    fetchMovies(params)
      .then(response => {
        setReviews(normalizeReview(response.results));
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      });
  };

  return {
    movies,
    fetchMoviesList,
    movie,
    fetchMovie,
    cast,
    fetchCast,
    reviews,
    fetcReviews,
    showLoader,
  };
};

export default useFetch;