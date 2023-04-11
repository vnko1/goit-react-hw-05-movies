import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Message from 'components/toast/Toast';
import { fetchMovies, normalizeReview } from 'services';

const Reviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const params = { fetchParams: `movie/${moviesId}/reviews`, controller };

    fetchMovies(params)
      .then(response => {
        setReviews(normalizeReview(response.results));
      })
      .catch(error => {
        if (error.message !== 'canceled') toast.error(error.message);
      });

    return () => {
      controller.abort();
    };
  }, [moviesId]);
  return (
    <>
      {!!reviews.length && (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && <p>We don't have any reviews for this movie</p>}
      <Message />
    </>
  );
};

export default Reviews;
