import { useState } from 'react';

const SearchForm = ({ getQuerySearch }) => {
  const [querySearch, setQuerySearch] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!querySearch.trim()) return;
    getQuerySearch(querySearch.trim().toLowerCase());
    setQuerySearch('');
  };

  const onHandleChange = e => {
    const { value } = e.currentTarget;
    setQuerySearch(value);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        type="text"
        name="query"
        value={querySearch}
        placeholder="Search movies"
        autoComplete="off"
        autoFocus
        onChange={onHandleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
