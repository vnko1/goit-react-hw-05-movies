import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Message from 'components/toast/Toast';
import useFetch from 'services/hooks';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const { cast, fetchCast } = useFetch();
  const { moviesId } = useParams();
  const { current: fetch } = useRef(fetchCast);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}/credits`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  return (
    <>
      {!!cast.length && (
        <CastList>
          {cast.map(({ id, name, original_name, character, profile_path }) => (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://placehold.co/80x100/png'
                }
                alt={name}
                width="180"
              />
              <p>{original_name}</p>
              <p>Character: {character}</p>
            </CastItem>
          ))}
        </CastList>
      )}
      <Message />
    </>
  );
};

export default Cast;
