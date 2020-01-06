import React from 'react';
import './App.css';
import DisplayPresenter from './components/DisplayPresenter';
import Attendees from './components/Attendees';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedAttendees: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      displayPresenter: true,
    }));
  }

  handleChange(e) {
    const selectedOptions = [].slice.call(e.target.selectedOptions).map(o => o.value);
    this.setState(state => ({ selectedAttendees: selectedOptions, displayPresenter: false }));
  }

  render() {
    return (
      <div className="App">
          <p>
            <span className="label">Who will join standup?</span>
          </p>
          <p>
            <div>
              <Attendees handleChange={this.handleChange} />
            </div>
          </p>
          <p>
            <DisplayPresenter handleClick={this.handleClick}
                              displayPresenter={this.state.displayPresenter}
                              attendees={this.state.selectedAttendees} />
          </p>
      </div>
    );
  }

}

export default App;
