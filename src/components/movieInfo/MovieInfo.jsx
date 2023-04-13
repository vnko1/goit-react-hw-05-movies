import { Suspense, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/loader/Loader';
import {
  MainContainer,
  Container,
  PageLink,
  LinkList,
} from './MovieInfo.styled';

const MovieInfo = ({ movie, setContentIsLoading, contentIsLoading }) => {
  const { date, title, tagline, poster, popularity, genre, overview } = movie;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const onComplete = () => setContentIsLoading(false);

  return (
    <MainContainer className={!contentIsLoading && 'loaded'}>
      <PageLink to={backLinkHref.current}>Go back</PageLink>
      <Container>
        <img
          src={poster}
          alt={tagline}
          onLoad={onComplete}
          onError={onComplete}
          width="400"
          height="600"
        />
        <div>
          <div>
            <h1>{title}</h1>
            <p>{`${date}`}</p>
          </div>
          <p>Popularity: {popularity}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genre}</p>
        </div>
      </Container>
      <h2>Additional information</h2>
      <LinkList>
        <li>
          <PageLink to="cast">Cast</PageLink>
        </li>
        <li>
          <PageLink to="reviews">Reviews</PageLink>
        </li>
      </LinkList>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

MovieInfo.propTypes = {
  setContentIsLoading: PropTypes.func.isRequired,
  contentIsLoading: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    popularity: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieInfo;
