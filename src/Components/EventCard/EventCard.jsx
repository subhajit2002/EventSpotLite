// EventCard.js
import React from 'react';

const EventCard = ({ event, onClick }) => {
  return (
    <div className="event-card" onClick={() => onClick(event)}>
      <h2>{event.name}</h2>
      <p>{event.date}</p>
      {event.image && <img src={event.image} alt={event.name} />}
    </div>
  );
};

export default EventCard;