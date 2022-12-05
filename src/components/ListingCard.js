import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {
  const [isFave, setIsFave] = useState(false)

  const handleFaveClick = () => setIsFave(!isFave)

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(() => onDelete(listing.id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={"description"} />
      </div>
      <div className="details">
        {isFave ? (
          <button className="emoji-button favorite active" onClick={handleFaveClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFaveClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
