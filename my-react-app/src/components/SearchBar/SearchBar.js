import React from "react";
// import { useNavigate } from "react-router-dom";
import { locationData } from "../../data/locations";

import { SearchResult } from "../SearchResult/SearchResult";
import { useLocation } from "react-router-dom";

import { useState } from "react";

import "./SearchBar.css";

export const SearchBar = () => {
  // const navigate = useNavigate();

  // const navigateToDescriptionPage = () => {
  //   navigate("/description-page");
  // };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const [searchValue, setSearchValue] = useState(searchQuery || "");
  const [suggestions, setSuggestions] = useState([]);

  const searchChange = (e) => {
    const newSearchValue = e.target.value;
    setSearchValue(newSearchValue);

    if (newSearchValue.trim() === "") {
      setSuggestions([]);
    } else {
      generateSuggestions(newSearchValue);
    }
  };

  const generateSuggestions = (searchQuery) => {
    const titleSuggestions = filteredMonuments
      .filter((monument) =>
        monument.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((monument) => monument.title);

    setSuggestions(titleSuggestions);
  };

  const filteredMonuments = locationData.filter((data) => {
    const isSearched = data.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    return isSearched;
  });

  const monumentsToDisplay = filteredMonuments.map((data) => {
    return (
      <div key={data._id} className="monument-item" style={{ cursor: 'pointer' }}>
        <SearchResult data={data} />
      </div>
    );
  });

  return (
    <div className="search-container">
      <h3 className="text-center">LIST OF DOCUMENTED AREAS</h3>
      <div className="flex searchbar justify-between">
        <input
          type="text"
          placeholder="Monuments"
          onChange={searchChange}
          value={searchValue}
        />
        <img src="searchbar.svg" alt="" className="border-none" />
      </div>
      {suggestions.length > 0 && (
      <ul className="suggestion">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => setSearchValue(suggestion)} className="suggestion-item">
            {suggestion}
          </li>
        ))}
      </ul>
    )}
      <div>
        {/* <div className="info">
          <div className="flex m-0 p-0 gap-2">
            <img src="monument.svg" alt="" />
            <h4 className="m-0 p-0">Bhaktapur Durbar Square</h4>
          </div>
          <p className="m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor <br /> incididunt ut labore et dolore magna...
          </p>
          <div className="flex m-0 p-0 right gap-2">
            <div
              className="flex m-0 p-0 gap-2"
              onClick={navigateToDescriptionPage}
            >
              <img src="info.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Details</p>
            </div>
            <div className="flex m-0 p-0 gap-2">
              <img src="location.svg" alt="" className="m-0 p-0" />
              <p className="m-0 p-0"> Map</p>
            </div>
          </div>
        </div> */}
        {/* <SearchResult data={locationData[0]} /> */}
        {monumentsToDisplay}
      </div>
    </div>
  );
};
