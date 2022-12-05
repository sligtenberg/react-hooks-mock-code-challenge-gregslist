import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listingsArray => setListings(listingsArray))
  }, [])

  const displayedListings = listings.filter(listing => search === "" || listing.description.toLowerCase().includes(search.toLowerCase()) ? true : false)

  return (
    <div className="app">
      <Header setSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} setListings={setListings}/>
    </div>
  );
}

export default App;