import React, { useState } from "react";

function Search({ setSearch }) {
  const [searchBarText, setSearchBarText] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setSearch(searchBarText)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBarText}
        onChange={e => setSearchBarText(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
