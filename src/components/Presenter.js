import React from 'react';
import Randomizer from '../lib/randomizer';

class Presenter extends React.Component {
  constructor(props) {
    super(props);
  }

  show() {
    const attendees = this.props.attendees;
    const randomizer = new Randomizer(() => Math.floor(Math.random() * attendees.length));
    return randomizer.selectPresenter(attendees);
  }

  render() {
    return (
        <div id="presenter" className="show-presenter">
            { this.show() } will be ScrumMaster this turn.
        </div>
    );
  }
}

export default Presenter;
