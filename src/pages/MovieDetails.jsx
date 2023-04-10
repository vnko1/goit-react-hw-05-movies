import MovieInfo from 'components/movieInfo/MovieInfo';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovies } from 'services';
import { normalizeMovie } from 'services/funcs';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}`, controller };
    fetchMovies(params)
      .then(response => {
        setMovie(normalizeMovie(response));
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, [moviesId]);

  return (
    <div>
      {movie && (
        <>
          <MovieInfo movie={movie} />
        </>
      )}
    </div>
  );
};

export default MovieDetails;
