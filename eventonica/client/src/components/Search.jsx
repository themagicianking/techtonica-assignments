import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

function Search({ onSearch }) {
  const [usersearch, setUsersearch] = useState("");

  function handleChange() {
    setUsersearch(event.target.value);
  }

  function handleSubmit() {
    event.preventDefault();
    onSearch(usersearch);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Find an event</Form.Label>
        <input type="text" value={usersearch} onChange={handleChange}></input>
        <Button type="submit">Search</Button>
      </Form>
    </div>
  );
}

export default Search;
