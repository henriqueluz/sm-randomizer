import React from 'react';
import Presenter from './Presenter';

class DisplayPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = props.handleClick;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Choose</button>
        { this.props.displayPresenter ? <Presenter attendees={this.props.attendees} /> : null }
      </div>
    );
  }
}

export default DisplayPresenter;
