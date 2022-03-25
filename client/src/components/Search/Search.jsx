import './_Search.scss';
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

    const categoriesValuesToArray = Object.values(categories);
    // console.log(categoriesValuesToArray);

    // const categoriesToValuesToArrayFilter = categoriesValuesToArray.filter(
    //   (values) => values >= 2
    // );
    // console.log(categoriesToValuesToArrayFilter);

    const categoriesKeyToArray = Object.keys(categories);
    // console.log(categoriesKeyToArray);

    const categoriesKeyToArrayFilter = categoriesKeyToArray.filter(
      (key) => key.length > 4
    );
    console.log(categoriesKeyToArrayFilter);

    let fabiansThing = 0;
    if (checked) {
      fabiansThing = categoryEnum + categoryId;
    } else {
      fabiansThing = categoryEnum - categoryId;
      // console.log(typeof category, category, typeof categoryName, categoryName);
    }

    setCategoryEnum(fabiansThing);
    console.log(categoryId, categoryName, categoryEnum);

    const allTheCategoryEntries = Object.entries(categories);
    const filteredCategoryEntries = allTheCategoryEntries.filter(
      (val) => val[1] & fabiansThing
    );
    const ourNewCategoryFilter = filteredCategoryEntries
      .map((val) => val[0])
      .join('|');

    setCategory(ourNewCategoryFilter);

    // switch (categoryName) {
    //   case 0:
    //     setCategory(category + categoryName);
    //     console.log('the season is summer');
    //     break;
    //   case 1:
    //     setCategory(category - categoryName);
    //     console.log('the season is summer');
    //     break;
    // }
    // if (checked) {
    //   setCategory(categoryName);
    //   console.log(`${categoryName} is checked`);
    // }
    // else if (!checked) {
    //   setCategory('');
    // }
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
