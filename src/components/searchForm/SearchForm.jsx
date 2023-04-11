import { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieSearchForm, Input, Button } from './SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
  const [querySearch, setQuerySearch] = useState('');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!querySearch.trim()) return;
    setSearchParams({ query: querySearch.trim().toLowerCase() });
    setQuerySearch('');
  };

  const onHandleChange = e => {
    const { value } = e.currentTarget;
    setQuerySearch(value);
  };

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
