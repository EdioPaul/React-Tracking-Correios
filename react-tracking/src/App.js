import React, {useState} from 'react';
import TrackingEvents from './components/TrackingEvents';
import TrackingForm from './components/TrackingForm';
import { track } from './helpers/ApiHelper';

function App() {
const [events, setEvents] = useState([]);

const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    track(data.tracking).then(setEvents).catch(console.error);
    console.log(events)
};

  return (
    <div className="container">    
      <TrackingForm submitHandler={submitHandler}/>
      <TrackingEvents events={events}/>
    </div>
  );
}

export default App;
