import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

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
      {usersearch != "" ? (
        <div className="list-events">
          <h2>All Events</h2>
          <ul>
            {events.map((event) => {
              return (
                <li key={event.id}>
                  {" "}
                  <Event
                    event={event}
                    toDelete={onDelete}
                    toUpdate={onUpdate}
                  />
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
