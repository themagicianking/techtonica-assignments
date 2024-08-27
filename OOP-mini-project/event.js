// TicketType creates tickets
class TicketType {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

// Event creates events with name, description, and ticket types
class Event {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }

  addAvailableTickets(ticketName, price) {
    const newTicket = new TicketType(ticketName, price);
    this.availableTickets.push(newTicket);
  }

  allTickets() {
    const ticketStrings = this.availableTickets.map(
      (ticket, i) => `${i + 1}. ${ticket.type} ($${ticket.price})`
    );
    return `All tickets: ${ticketStrings.join(" ")}`;
  }

  searchTickets(lowest, highest) {
    const matchingTickets = this.availableTickets.filter(
      (ticket) => ticket.price >= lowest && ticket.price <= highest
    );
    const matchingTicketStrings = matchingTickets.map(
      (ticket, i) => `${i + 1}. ${ticket.type} ($${ticket.price})`
    );
    return matchingTickets.length === 0
      ? "No tickets available."
      : `Eligible tickets: ${matchingTicketStrings.join(" ")}`;
  }
}

// creating three Event objects
const eventObj1 = new Event(
  "VMFA Tech Mixer",
  "A meetup event for local developers"
);
const eventObj2 = new Event(
  "Beetlejuice 2 Screening",
  "Movie night at the Byrd"
);
const eventObj3 = new Event(
  "RVA Pride",
  "Pride on Brown's Island with Noteables"
);

// adding events to an array
const eventArray = new Array();
eventArray.push(eventObj1, eventObj2, eventObj3);

// adding the array of events to the DOM
document.addEventListener("DOMContentLoaded", () => {
  let html = "";
  eventArray.forEach((item) => {
    html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 10)}`;
  });
  document.querySelector("#event").innerHTML = html;
});

// adding different ticket types to different events
eventObj1.addAvailableTickets("Developer", 5);
eventObj1.addAvailableTickets("Employer", 10);

eventObj2.addAvailableTickets("Student", 12);
eventObj2.addAvailableTickets("Senior", 12);
eventObj2.addAvailableTickets("Adult", 15);

eventObj3.addAvailableTickets("Performer", 0);
eventObj3.addAvailableTickets("Volunteer", 0);
eventObj3.addAvailableTickets("Standard", 5);
