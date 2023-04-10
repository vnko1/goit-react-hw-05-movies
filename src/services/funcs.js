export const normalizeMovies = movies =>
  movies.map(({ title, id }) => ({ title, id }));
