import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { after } from 'underscore';
import Message from 'components/toast/Toast';
import AuthorsList from 'components/loader/AuthorsList';
import useFetch from 'services/hooks';
import { STATUS } from 'services';
import { ReviewsList } from './Reviews.styled';
import { animateScroll as scroll } from 'react-scroll';

const Reviews = () => {
  const {
    reviews,
    fetcReviews,
    contentIsLoading,
    setContentIsLoading,
    status,
  } = useFetch();
  const { moviesId } = useParams();
  const { current: fetch } = useRef(fetcReviews);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}/reviews`, controller });
    scroll.scrollMore(500);
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  const onComplete = after(reviews.length, () => {
    setContentIsLoading(false);
  });

  return (
    <>
      {contentIsLoading && <AuthorsList />}
      {status === STATUS.resolved && !!reviews.length && (
        <ReviewsList className={!contentIsLoading && 'listLoaded'}>
          {reviews.map(({ author, content, id, avatar }) => (
            <li key={id}>
              <img
                src={avatar}
                alt={author}
                onLoad={onComplete}
                onError={onComplete}
                width="80"
                height="80"
              />
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ReviewsList>
      )}
      <Message />
    </>
  );
};

export default Reviews;
