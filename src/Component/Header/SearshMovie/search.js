import React from "react"
import Rating from '../../Main/Rate/rating'
import "./search.css";

  const SearchMovie = ({
  setNameSearch,
  setRatingSearch,
  ratingSearch,
}) => {
  return (
    <div className="search">
      <Rating
        className="star-rating"
        starIndex={setRatingSearch}
        rating={ratingSearch}
      />
      <div>
        <form action="" autoComplete="on">
          <input
            className="input-search"
            name="search"
            type="text"
            placeholder="What're we looking for ?"
            onChange={(event) => {
              setNameSearch(event.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};
export default SearchMovie 
