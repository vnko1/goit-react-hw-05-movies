import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { MovieSearchForm, Input, Button } from './SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
  const [querySearch, setQuerySearch] = useState('');

  const onHandleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!querySearch.trim()) return;
      setSearchParams({ query: querySearch.trim().toLowerCase() });
      setQuerySearch('');
    },
    [querySearch, setSearchParams]
  );

  const onHandleChange = useCallback(
    e => {
      const { value } = e.currentTarget;

      setQuerySearch(value);
    },
    [setQuerySearch]
  );

  return (
    <MovieSearchForm onSubmit={onHandleSubmit}>
      <Input
        type="text"
        name="query"
        value={querySearch}
        placeholder="Search movies"
        autoComplete="off"
        autoFocus
        onChange={onHandleChange}
      />
      <Button type="submit">Search</Button>
    </MovieSearchForm>
  );
};

SearchForm.propTypes = { setSearchParams: PropTypes.func.isRequired };

export default SearchForm;
