import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies, normalizeCast, useFetch } from 'services';

const Cast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState([]);
  const { errorMessage, setErrorMessage } = useFetch();

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}/credits`, controller };

    setErrorMessage(null);

    fetchMovies(params)
      .then(response => {
        setCast(normalizeCast(response.cast));
      })
      .catch(error => {
        if (error.message !== 'canceled') setErrorMessage(error.message);
      });

    return () => {
      controller.abort();
    };
  }, [moviesId, setErrorMessage]);

  return (
    <>
      {!!cast.length && (
        <ul>
          {cast.map(({ id, name, original_name, character, profile_path }) => (
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
          ))}
        </ul>
      )}
      {!cast.length && <p>We don't have any cast for this movie</p>}
      {!!errorMessage && <p>{errorMessage}</p>}
    </>
  );
};

export default Cast;
