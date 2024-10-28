import React, { useState, useEffect } from 'react';
import EventCard from '../EventCard/EventCard';
import EventModal from '../EventModal/EventModal';
import SearchBar from '../SearchBar/SearchBar';
import eventsData from './events.json'; // Import mock data

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsData);
    setFilteredEvents(eventsData);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = events.filter(event =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="event-list">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} onClick={handleCardClick} />
        ))}
      </div>
      {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
    </div>
  );
};

export default EventList;