const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db/db-connection.js");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route "/""
app.get("/", (req, res) => {
  res.json({ message: "The server is running." });
});

// create the get request for events in the endpoint '/api/events'
app.get("/api/events", async (req, res) => {
  try {
    const { rows: events } = await db.query("SELECT * FROM events");
    res.send(events);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create a get request for events whose names match a search term
app.get("/api/events/search", async (req, res) => {
  const EVENTNAME = req.query.usersearch;
  console.log(EVENTNAME);
  try {
    const { rows: events } = await db.query(
      `SELECT * FROM events WHERE eventname=${EVENTNAME}`
    );
    res.send(events);
  } catch (e) {
    res.send([]);
  }
});

// create the POST request
app.post("/api/events", async (req, res) => {
  try {
    const newEvent = {
      eventname: req.body.eventname,
      eventlocation: req.body.eventlocation,
      eventdate: req.body.eventdate,
    };
    const result = await db.query(
      "INSERT INTO events(eventname, eventlocation, eventdate) VALUES($1, $2, $3) RETURNING *",
      [newEvent.eventname, newEvent.eventlocation, newEvent.eventdate]
    );
    console.log("post request being made here");
    console.log(result.rows[0]);
    res.json(result.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// delete request for events
app.delete("/api/events/:eventId", async (req, res) => {
  try {
    const eventId = req.params.eventId;
    await db.query("DELETE FROM events WHERE id=$1", [eventId]);
    console.log("From the delete request-url", eventId);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//A put request - Update an event
app.put("/api/events/:eventId", async (req, res) => {
  //console.log(req.params);
  //This will be the id that I want to find in the DB - the event to be updated
  const eventId = req.params.eventId;
  const updatedEvent = {
    id: req.body.id,
    name: req.body.eventname,
    location: req.body.eventlocation,
  };
  console.log("In the server from the url - the event id", eventId);
  console.log(
    "In the server, from the react - the event to be edited",
    updatedEvent
  );
  const query = `UPDATE events SET eventname=$1, eventlocation=$2, eventdate=$3 WHERE id=${eventId} RETURNING *`;
  const values = [
    updatedEvent.eventname,
    updatedEvent.eventlocation,
    updatedEvent.eventdate,
  ];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
