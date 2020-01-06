import React from 'react';
import Randomizer from '../lib/randomizer';

class Presenter extends React.Component {
  show() {
    const attendees = ['Darragh', 'Henrique', 'Illya', 'Leszek', 'Tomasz'];
    const randomizer = new Randomizer(() => Math.floor(Math.random() * attendees.length));
    return randomizer.selectPresenter(attendees);
  }

  render() {
    return (
        <div id="presenter" className="show-presenter">
            { this.show() }
        </div>
    );
  }
}

export default Presenter;
