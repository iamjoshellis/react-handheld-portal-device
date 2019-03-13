import * as React from 'react';
import * as ReactDOM from 'react-dom';

class Portal extends React.Component {
  container = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.container);
  }

  componentWillUnmount() {
    document.body.removeChild(this.container);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

export default Portal;
