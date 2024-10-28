import React from 'react';
import EventList from './Components/EventList/EventList';
import './App.css';

const App = () => {
  return (
    <div>
      <header className="app-header">
        <h1>EventSpot Lite</h1>
      </header>
      <EventList />
    </div>
  );
};

export default App;