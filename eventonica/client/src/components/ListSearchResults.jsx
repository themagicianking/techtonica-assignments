import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Search from "./Search";
import SearchResult from "./SearchResult";

function ListSearchResults() {
  const [results, setResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  function getResults(usersearch) {
    fetch(`http://localhost:8080/api/events/search?usersearch=${usersearch}`)
      .then((res) => res.json())
      .then((results) => setResults(results));
  }

  useEffect(() => {
    getResults(searchText);
  }, [results]);

  function onSearch(usersearch) {
    setSearchText(usersearch);
  }

  return (
    <div>
      <Search onSearch={onSearch} />
      <h2>Search Results</h2>
      <ul>
        {results.map((event) => {
          return (
            <li key={event.id}>
              {" "}
              <SearchResult
                eventname={event.eventname}
                eventlocation={event.eventlocation}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListSearchResults;
