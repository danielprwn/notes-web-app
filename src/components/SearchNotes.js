import React from "react";
import { BiSearchAlt } from "react-icons/bi";

const SearchNotes = ({ handleSearch }) => {
  return (
    <div className="search">
      <BiSearchAlt className="search-icons" size="1.6em" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="Search notes..."
      />
    </div>
  );
};

export default SearchNotes;
