import React from "react";
import SearchIcon from "../assets/search.png";
import { useDispatch, useSelector } from "react-redux";
import ShowSearchSuggestions from "./ShowSearchSuggestions";
import { addToSearchSuggestions } from "../redux-store/slice/searchSlice";

const Search = () => {
  const [suggestionsHovered, setSuggestionsHovered] = React.useState(false);
  const [searchKey, setSearchKey] = React.useState("");
  const dispatch = useDispatch();
  const searchSuggestionResults = useSelector(
    (store) => store.searchSuggestions.searchSuggestions,
  );

  const getSuggestions = async () => {
    const response = await fetch(
      "https://proxy.corsfix.com/?https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchKey,
    );
    const data = await response.json();
    dispatch(
      addToSearchSuggestions({
        key: searchKey,
        data: data[1],
      }),
    );
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      searchKey.length > 0 &&
        !searchSuggestionResults[searchKey] &&
        getSuggestions();
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchKey]);

  return (
    <React.Fragment>
      <input
        type="text"
        style={{
          height: "35px",
          width: "28rem",
          marginTop: "7px",
          marginLeft: "300px",
          border: "1px solid gray",
          borderRadius: "15px 0px 0px 15px",
          paddingLeft: "10px",
          fontSize: "15px",
          color: "gray",
        }}
        placeholder="Search"
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        onFocus={() => setSuggestionsHovered(true)}
        onBlur={() => setSuggestionsHovered(false)}
      />
      <img
        style={{
          height: "33px",
          marginTop: "7px",
          paddingTop: "4px",
          border: "1px solid black",
          borderRadius: "0px 20px 20px 0px",
        }}
        alt="search icon"
        src={SearchIcon}
      />
      {searchKey.length > 0 &&
        searchSuggestionResults[searchKey]?.length > 0 &&
        suggestionsHovered && (
          <ShowSearchSuggestions
            setSuggestionsHovered={setSuggestionsHovered}
            searchKey={searchKey}
          />
        )}
    </React.Fragment>
  );
};

export default Search;
