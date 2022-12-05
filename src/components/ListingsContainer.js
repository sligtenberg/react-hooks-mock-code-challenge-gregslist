import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => <ListingCard
          key={listing.id}
          listing={listing}
          onDelete={listingToDeleteId => setListings(listings.filter(listing => listing.id !== listingToDeleteId))}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
