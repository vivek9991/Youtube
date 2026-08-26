import React from "react";
import SearchIcon from "../assets/search.png";
import { useSelector } from "react-redux";

const ShowSearchSuggestions = ({ setSuggestionsHovered, searchKey }) => {
  const searchSuggestionResults = useSelector(
    (store) => store.searchSuggestions.searchSuggestions[searchKey],
  );
  return (
    <div className="suggestionItem">
      {searchSuggestionResults.map((result) => (
        <div style={{ display: "flex" }} key={result}>
          <img
            style={{
              height: "33px",
              marginTop: "-3px",
            }}
            alt="search icon"
            src={SearchIcon}
          />
          {result}
        </div>
      ))}
    </div>
  );
};

export default ShowSearchSuggestions;
