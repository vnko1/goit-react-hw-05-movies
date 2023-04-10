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
  const date = release_date.split('-');

  const genreList = genres.map(genre => genre.name).join(' ');
  return {
    date: date[0],
    title,
    tagline,
    id,
    poster_path,
    popularity,
    backdrop_path,
    genreList,
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
