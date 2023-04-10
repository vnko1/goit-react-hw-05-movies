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
    <ul>
      {!!reviews.length &&
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
