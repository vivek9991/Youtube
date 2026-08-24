import React from "react";
import SearchIcon from "../assets/search.png";
const Search = () => {
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
    </React.Fragment>
  );
};

export default Search;
