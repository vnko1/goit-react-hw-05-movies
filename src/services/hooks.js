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
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [contentIsLoading, setContentIsLoading] = useState(false);

  const fetchMoviesList = params => {
    setIsLoading(true);
    fetchMovies(params)
      .then(response => {
        if (response.results.length === 0) {
          setIsLoading(false);
          toast.error('Nothing found!');
        }
        const movies = normalizeMovies(response.results);

        setMovies(movies);
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  const fetchMovie = params => {
    setIsLoading(true);
    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          setIsLoading(false);
          toast.error(error.message);
        }
      });
  };

  const fetchCast = params => {
    setIsLoading(true);
    fetchMovies(params)
      .then(response => {
        setCast(normalizeCast(response.cast));
        if (response.cast.length === 0) {
          toast.error("We don't have any cast for this movie");
          setIsLoading(false);
        }
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          toast.error(error.message);
          setIsLoading(false);
        }
      });
  };

  const fetcReviews = params => {
    setContentIsLoading(true);
    fetchMovies(params)
      .then(response => {
        setReviews(normalizeReview(response.results));
        if (response.results.length === 0) {
          toast.error("We don't have any reviews for this movie");
          setContentIsLoading(false);
        }
      })
      .catch(error => {
        if (error.message !== 'canceled') {
          toast.error(error.message);
          setContentIsLoading(false);
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
    isLoading,
    setIsLoading,
    contentIsLoading,
    setContentIsLoading,
  };
};

export default useFetch;
