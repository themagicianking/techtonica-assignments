import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {

    // This is the original State with not initial event 
    const [event, setEvent] = useState(editingEvent || {
        eventname: "",
        eventlocation: "",
        eventdate: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const eventname = event.target.value;
        setEvent((event) => ({ ...event, eventname }));

    };

    const handleLocationChange = (event) => {
      const eventlocation = event.target.value;
      setEvent((event) => ({ ...event, eventlocation }));

  };

  const handleDateChange = (event) => {
    const eventdate = event.target.value;
    setEvent((event) => ({ ...event, eventdate }));

};

    const clearForm = () => {
        setEvent({ eventname: "", eventlocation: "", eventdate: "" })
    }

    //A function to handle the post request
    const postEvent = (newEvent) => {
        return fetch("http://localhost:8080/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Events (the parent) for updating the list
                onSaveEvent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putEvent = (toEditEvent) => {
        return fetch(`https://localhost:8080/api/events/${toEditEvent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditEvent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateEvent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (event.id) {
            putEvent(event);
        } else {
            postEvent(event);
        }
    };

    return (
        <Form className='form-events' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Event Name</Form.Label>
                <input
                    type="text"
                    id="add-event-name"
                    placeholder="Event Name"
                    required
                    value={event.eventname}
                    onChange={handleNameChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <input
                    type="text"
                    id="add-event-location"
                    placeholder="Location"
                    required
                    value={event.eventlocation}
                    onChange={handleLocationChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <input
                    type="datetime"
                    id="add-event-date"
                    placeholder="Date"
                    required
                    value={event.eventdate}
                    onChange={handleDateChange}
                />
            </Form.Group>
            <Form.Group>
            <Button type="submit" variant="outline-success">{event.id ? "Edit Event" : "Add Event"}</Button>
            {event.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm