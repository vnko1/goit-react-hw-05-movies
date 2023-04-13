import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Message from 'components/toast/Toast';
import { after } from 'underscore';
import NetflixLoader from 'components/loader/NetflixLoader';
import useFetch from 'services/hooks';
import { STATUS } from 'services';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const { cast, fetchCast, contentIsLoading, setContentIsLoading, status } =
    useFetch();
  const { moviesId } = useParams();
  const { current: fetch } = useRef(fetchCast);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}/credits`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  const onComplete = after(cast.length, () => {
    setContentIsLoading(false);
  });

  return (
    <>
      {contentIsLoading && (
        <NetflixLoader column={6} height={270} width={180} />
      )}
      {status === STATUS.resolved && !!cast.length && (
        <CastList className={!contentIsLoading && 'loaded'}>
          {cast.map(({ id, name, original_name, character, profile }) => (
            <CastItem key={id}>
              <img
                src={profile}
                alt={name}
                width="180"
                height="270"
                onLoad={onComplete}
                onError={onComplete}
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
