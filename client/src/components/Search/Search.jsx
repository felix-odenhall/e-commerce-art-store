import './_Search.scss';
import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';

const Search = ({ setQuery }) => {
  const [searchInput, setSearchInput] = useState('');
  const handleSubmit = (el) => {
    el.preventDefault();
    setQuery(searchInput);
    setSearchInput('');
  };
  const handleOnChange = (el) => {
    setSearchInput(el.target.value);
  };
  return (
    <div className="search">
      <div className="search__filter">
        <input
          type="checkbox"
          id="environment"
          name="search__filter__item"
          value="environment"
        />
        <label htmlFor="environment">Environment</label>
        <input
          type="checkbox"
          id="character"
          name="search__filter__item"
          value="character"
        />
        <label htmlFor="character">Characters</label>
      </div>
      <div className="search__form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-artwork"></label>
          <input
            onChange={handleOnChange}
            type="text"
            id="header-search"
            placeholder="Search artwork"
            name="search-artwork"
            value={searchInput}
          />
          <button type="submit">
            <FaSistrix />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
