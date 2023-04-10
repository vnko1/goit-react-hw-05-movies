import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies, normalizeCast } from 'services';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}/credits`, controller };
    fetchMovies(params)
      .then(response => {
        setCast(normalizeCast(response.cast));
      })
      .catch(error => {})
      .finally(() => {});

    return () => {
      controller.abort();
    };
  }, [moviesId]);

  return (
    <ul>
      {!!cast.length &&
        cast.map(({ id, name, original_name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://placehold.co/80x100/png'
                }
                alt={name}
                width="80"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
