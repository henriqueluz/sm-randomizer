import React from 'react';

class Attendees extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const participants = ['Darragh', 'Henrique', 'Leszek', 'Ilya', 'Tomasz'];

    return (
      <select id="scrum-master" onChange={this.props.handleChange} multiple="true">
        { participants.map( participant => {
            return (
              <option value={participant}>{participant}</option>
            );
          } )
        }
      </select>
    );
  }
}

export default Attendees;
