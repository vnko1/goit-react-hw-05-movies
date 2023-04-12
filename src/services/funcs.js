export const normalizeMovies = movies =>
  movies.map(({ title, id, poster_path, vote_average }) => {
    const poster = poster_path
      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
      : 'https://placehold.co/500x750/png';

    const averageVote = vote_average && Math.round(vote_average * 10);
    return { title, id, poster, averageVote };
  });

export const normalizeMovie = ({
  release_date,
  title,
  poster_path,
  popularity,
  backdrop_path,
  id,
  tagline,
  genres,
  overview,
}) => {
  const date = release_date
    ? release_date.split('-')[0]
    : 'No release information';

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://placehold.co/500x750/png';
  const genreList = genres.map(genre => genre.name).join(' ');
  const genre = genreList.length ? genreList : 'No genre information';

  return {
    date,
    title,
    tagline,
    id,
    poster,
    popularity: popularity + '',
    backdrop_path,
    genre,
    overview,
  };
};

export const normalizeCast = cast =>
  cast.map(({ id, name, original_name, character, profile_path }) => {
    const profile = profile_path
      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
      : 'https://placehold.co/80x100/png';
    return {
      id,
      name,
      original_name,
      character,
      profile,
    };
  });

export const normalizeReview = reviews =>
  reviews.map(({ author, author_details: { avatar_path }, content, id }) => {
    let avatar = null;
    if (avatar_path && !avatar_path?.includes('https')) {
      avatar = `https://image.tmdb.org/t/p/w500/${avatar_path}`;
    } else {
      avatar = 'https://placehold.co/80x80/png';
    }

    return { author, content, id, avatar };
  });
