import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
      .catch(error => {})
      .finally(() => {});

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
    </>
  );
};

export default Reviews;
