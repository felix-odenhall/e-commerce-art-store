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
  const handleOnChangeSearch = (el) => {
    setSearchInput(el.target.value);
  };
  const handleOnChangeCheck = (el) => {
    const checked = el.target.checked;
    const categoryName = el.target.id;
    if (checked) console.log(`${categoryName} is checked`);
    else console.log(`${categoryName} is unchecked`);
    console.log(checked);
  };
  return (
    <div className="search">
      <div className="search__filter">
        <input
          type="checkbox"
          id="environment"
          name="search__filter__item"
          value="environment"
          onChange={handleOnChangeCheck}
        />
        <label htmlFor="environment">Environment</label>
        <input
          type="checkbox"
          id="character"
          name="search__filter__item"
          value="character"
          onChange={(e) => handleOnChangeCheck(e)}
        ></input>
        <label htmlFor="character">Characters</label>
      </div>
      <div className="search__form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search-artwork"></label>
          <input
            onChange={handleOnChangeSearch}
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
