import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import SearchResult from "./SearchResult";

function Search() {
  const [usersearch, setUsersearch] = useState("");
  const [events, setEvents] = useState([]);

  function getEvents() {
    fetch(`http://localhost:8080/api/events/search?usersearch=${usersearch}`)
      .then((res) => res.json())
      .then((events) => setEvents(events));
  }

  useEffect(() => {
    getEvents();
  }, [events]);

  function handleChange() {
    setUsersearch(event.target.value);
  }

  function handleSubmit() {
    event.preventDefault();
    getEvents();
  }

  return (
    <div>
      <Form>
        <Form.Label>Find an event</Form.Label>
        <input type="text" value={usersearch} onChange={handleChange}></input>
        <Button type="submit" onSubmit={handleSubmit}>
          Search
        </Button>
      </Form>
      {events.length > 0 ? (
        <div className="list-events">
          <h2>Found {events.length} events:</h2>
          <ul>
            {events.map((event) => {
              return (
                <li key={event.id}>
                  {" "}
                  <SearchResult event={event} />
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>
          <p>No events found.</p>
        </div>
      )}
    </div>
  );
}

export default Search;
