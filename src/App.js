import React from 'react';
import './App.css';
import Display from './components/DisplayPresenter';
import Attendees from './components/Attendees';

const App = () => {

  return (
    <div className="App">
        <p>
          <span className="label">Who will join standup?</span>
        </p>
        <p>
          <div>
            <Attendees />
          </div>
        </p>
        <p>
          <Display />
        </p>
    </div>
  );
}

export default App;
