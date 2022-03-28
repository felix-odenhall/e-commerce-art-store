import { FaSistrix } from 'react-icons/fa';
import { useState } from 'react';

const Search = ({ setQuery, setCategory, category }) => {
  const [categoryEnum, setCategoryEnum] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const handleSubmit = (el) => {
    el.preventDefault();
    setQuery(searchInput);
    setSearchInput('');
  };
  const handleOnChangeSearch = (el) => {
    setSearchInput(el.target.value);
  };
  const categories = {
    environment: 1,
    character: 2,
  };

  const handleOnChangeCheck = (el) => {
    const checked = el.target.checked;
    const categoryId = parseInt(el.target.id);
    const categoryName = el.target.value;
    setQuery('');

    let selectedCategories = 0;
    if (checked) {
      selectedCategories = categoryEnum + categoryId;
    } else {
      selectedCategories = categoryEnum - categoryId;
    }

    setCategoryEnum(selectedCategories);

    const allTheCategoryEntries = Object.entries(categories);
    const filteredCategoryEntries = allTheCategoryEntries.filter(
      (val) => val[1] & selectedCategories
    );
    const newCategoryFilter = filteredCategoryEntries
      .map((val) => val[0])
      .join('|');

    setCategory(newCategoryFilter);
  };

  return (
    <div className="search">
      <div className="search__filter">
        <input
          type="checkbox"
          id={categories.environment}
          name="environment"
          value="environment"
          onChange={handleOnChangeCheck}
        />
        <label htmlFor="environment">Environment</label>
        <input
          type="checkbox"
          id={categories.character}
          name="character"
          value="character"
          onChange={handleOnChangeCheck}
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
