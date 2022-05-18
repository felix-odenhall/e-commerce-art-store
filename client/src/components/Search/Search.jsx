import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Search = ({ setQuery, setCategory, category }) => {
  const [categoryEnum, setCategoryEnum] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const handleSubmit = (el) => {
    el.preventDefault();
    setQuery(searchInput);
    setSearchInput("");
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
    setQuery("");

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
      .join("|");

    setCategory(newCategoryFilter);
  };

  return (
    <>
      <hr className="bg-slate-200 mt-2" />
      <div className="mx-auto w-full max-w-6xl flex flex-col sm:flex-row  justify-between items-center px-5 py-4">
        <div className="py-4 md:py-0">
          <input
            type="checkbox"
            id={categories.environment}
            name="environment"
            value="environment"
            onChange={handleOnChangeCheck}
          />
          <label className="px-2" htmlFor="environment">
            Environment
          </label>
          <input
            type="checkbox"
            id={categories.character}
            name="character"
            value="character"
            onChange={handleOnChangeCheck}
          ></input>
          <label className="px-2" htmlFor="character">
            Characters
          </label>
        </div>
        <div>
          <form className="flex justify-center" onSubmit={handleSubmit}>
            <label htmlFor="search-artwork"></label>
            <input
              className="rounded p-2 mr-2 bg-slate-200"
              onChange={handleOnChangeSearch}
              type="text"
              id="header-search"
              placeholder="Search artwork"
              name="search-artwork"
              value={searchInput}
            />
            <button className=" text-3xl text-slate-900" type="submit">
              <AiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
      <hr className="bg-slate-200 mb-3" />
    </>
  );
};

export default Search;
