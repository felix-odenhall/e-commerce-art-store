import './_Search.scss';
import { FaSistrix } from 'react-icons/fa';

const Search = () => {
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
        <form action="/" method="get">
          <label htmlFor="search-artwork"></label>
          <input
            type="text"
            id="header-search"
            placeholder="Search artwork"
            name="search-artwork"
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
