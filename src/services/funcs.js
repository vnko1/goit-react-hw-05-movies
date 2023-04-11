export const normalizeMovies = movies =>
  movies.map(({ title, id }) => ({ title, id }));

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
  cast.map(({ id, name, original_name, character, profile_path }) => ({
    id,
    name,
    original_name,
    character,
    profile_path,
  }));

export const normalizeReview = reviews =>
  reviews.map(({ author, content, id }) => ({ author, content, id }));
