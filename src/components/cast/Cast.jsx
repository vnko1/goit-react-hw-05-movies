import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Message from 'components/toast/Toast';
import useFetch from 'services/hooks';

const Cast = () => {
  const { cast, fetchCast } = useFetch();
  const { moviesId } = useParams();
  const { current: fetch } = useRef(fetchCast);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}/credits`, controller });
  }, [fetch, moviesId]);

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
      <Message />
    </>
  );
};

export default Cast;
