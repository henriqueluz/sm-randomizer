import React from 'react';

class Attendees extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const attendees = ['Darragh', 'Henrique', 'Leszek', 'Ilya', 'Tomasz'];

    return (
      <select id="scrum-master" multiple="true">
        { attendees.map( attendee => {
            return (
              <option value={attendee}>{attendee}</option>
            );
          } )
        }
      </select>
    );
  }
}

export default Attendees;
