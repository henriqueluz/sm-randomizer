import React from 'react';
import Presenter from './Presenter';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayPresenter: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      displayPresenter: !state.displayPresenter
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Choose</button>
        { this.state.displayPresenter ? <Presenter /> : null }
      </div>
    );
  }
}

export default Display;
