import React from 'react';
import './App.css';
import { Randomizer } from './app/randomizer';

const App = () => {
  return (
    <div className="App">
        <p>
          <span className="label">Who will join standup?</span>
        </p>
        <p>
          <div>
            <select id="scrum-master" multiple="true">
              <option value="Darragh">Darragh</option>
              <option value="Darragh">Henrique</option>
              <option value="Darragh">Leszek</option>
              <option value="Darragh">Tomasz</option>
              <option value="Darragh">Ilya</option>
            </select>
          </div>
        </p>
        <p>
          <button>Choose</button>
        </p>
    </div>
  );
}

export default App;
