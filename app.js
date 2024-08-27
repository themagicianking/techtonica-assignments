import express from "express";
const app = express();
app.use(express.json());

const headers = { Authorization: "Bearer SI2YYVL3EYHH2PMBBRZJ" };

async function fetchVenue() {
  await fetch(
    "https://www.eventbriteapi.com/v3/events/1002724966367/?expand=venue",
    { headers }
  )
    .then((data) => data.json())
    .then((res) => res.venue)
    .then((venue) => console.log(venue))
    .catch((err) => console.log(err));
}

async function fetchOrganizer() {
  await fetch(
    "https://www.eventbriteapi.com/v3/events/1002724966367/?expand=organizer",
    { headers }
  )
    .then((data) => data.json())
    .then((res) => res.organizer)
    .then((organizer) => console.log(organizer))
    .catch((err) => console.log(err));
}

async function fetchCategory() {
  await fetch(
    "https://www.eventbriteapi.com/v3/events/1002724966367/?expand=category",
    { headers }
  )
    .then((data) => data.json())
    .then((res) => res.category)
    .then((category) => console.log(category))
    .catch((err) => console.log(err));
}

async function fetchTicketAvailability() {
  await fetch(
    "https://www.eventbriteapi.com/v3/events/1002724966367/?expand=ticket_availability",
    { headers }
  )
    .then((data) => data.json())
    .then((res) => res.ticket_availability)
    .then((ticket_availability) => console.log(ticket_availability))
    .catch((err) => console.log(err));
}

async function fetchRefundPolicy() {
  await fetch(
    "https://www.eventbriteapi.com/v3/events/1002724966367/?expand=refund_policy",
    { headers }
  )
    .then((data) => data.json())
    .then((res) => res.refund_policy)
    .then((refund_policy) => console.log(refund_policy))
    .catch((err) => console.log(err));
}

// fetchVenue();
// fetchOrganizer();
// fetchCategory();
// fetchTicketAvailability();
// fetchRefundPolicy();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
