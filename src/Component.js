import React, { Fragment } from 'react';
import debounce from 'debounce';

import Portal from './Portal';

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  static defaultProps = {
    debounce: 16,
  };

  state = {
    parentRect: {},
  };

  componentDidMount() {
    this._getParentPosition();
    window.addEventListener('scroll', this._debouncedGetPosition, true);
    window.addEventListener('resize', this._debouncedGetPosition, true);
  }

  componentWillReceiveProps() {
    this._getParentPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this._debouncedGetPosition, true);
    window.removeEventListener('resize', this._debouncedGetPosition, true);
  }

  _getParentPosition = () => {
    const parentRect =
      (this.props.parentRef && this.props.parentRef.getBoundingClientRect()) ||
      (this.childRef.current && this.childRef.current.parentElement.getBoundingClientRect());
    if (parentRect) {
      this.setState(() => ({ parentRect }));
    }
  };

  renderPropsOrChildren = () =>
    typeof this.props.children === 'function'
      ? this.props.children(this.state.parentRect)
      : this.props.children;

  _debouncedGetPosition = debounce(this._getParentPosition, this.props.debounce);

  render() {
    return (
      <Fragment>
        <Portal>{this.renderPropsOrChildren()}</Portal>
        {!this.props.parentRef && <span style={{ display: 'none' }} ref={this.childRef} />}
      </Fragment>
    );
  }
}

export default Component;
