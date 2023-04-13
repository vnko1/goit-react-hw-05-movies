import { useState } from 'react';
import { fetchMovies } from './API';
import {
  normalizeMovies,
  normalizeMovie,
  normalizeCast,
  normalizeReview,
} from './funcs';
import { STATUS } from './constants';
import toast from 'react-hot-toast';

const useFetch = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [contentIsLoading, setContentIsLoading] = useState(false);
  const [status, setStatus] = useState(STATUS.idle);

  const fetchMoviesList = params => {
    setStatus(STATUS.pending);
    setContentIsLoading(true);
    fetchMovies(params)
      .then(response => {
        if (response.results.length === 0) {
          setStatus(STATUS.resolved);
          setContentIsLoading(false);
          return toast.error('Nothing found!');
        }
        const movies = normalizeMovies(response.results);
        setMovies(movies);
        setStatus(STATUS.resolved);
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setStatus(STATUS.error);
          setContentIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  const fetchMovie = params => {
    setStatus(STATUS.pending);
    setContentIsLoading(true);
    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
        setStatus(STATUS.resolved);
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setStatus(STATUS.error);
          setContentIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  const fetchCast = params => {
    setStatus(STATUS.pending);
    setContentIsLoading(true);
    fetchMovies(params)
      .then(response => {
        if (response.cast.length === 0) {
          setStatus(STATUS.resolved);
          setContentIsLoading(false);
          return toast.error("We don't have any cast for this movie");
        }
        setCast(normalizeCast(response.cast));
        setStatus(STATUS.resolved);
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setStatus(STATUS.error);
          setContentIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  const fetcReviews = params => {
    setStatus(STATUS.pending);
    setContentIsLoading(true);
    fetchMovies(params)
      .then(response => {
        if (response.results.length === 0) {
          setContentIsLoading(false);
          setStatus(STATUS.resolved);
          return toast.error("We don't have any reviews for this movie");
        }
        setReviews(normalizeReview(response.results));
        setStatus(STATUS.resolved);
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setContentIsLoading(false);
          setStatus(STATUS.error);
          toast.error(error.message);
        }
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
    contentIsLoading,
    setContentIsLoading,
    status,
    setStatus,
  };
};

export default useFetch;
