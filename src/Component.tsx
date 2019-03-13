import * as React from 'react';
import * as debounce from 'debounce';

import Portal from './Portal';

export type Props = {
  debounce?: number;
  parentRef?: any;
  children: React.ReactNode;
};

export type State = {
  parentRect: ClientRect
}

class Component extends React.Component<Props, State> {
  childRef = React.createRef<HTMLSpanElement>();

  static defaultProps = {
    debounce: 16,
  };

  state = {
    parentRect: {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    },
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
    const { parentRef } = this.props;
    const parentRect =
      (parentRef && parentRef.current && parentRef.current.getBoundingClientRect()) ||
      (parentRef && parentRef.getBoundingClientRect()) ||
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
      <React.Fragment>
        <Portal>{this.renderPropsOrChildren()}</Portal>
        {!this.props.parentRef && <span style={{ display: 'none' }} ref={this.childRef} />}
      </React.Fragment>
    );
  }
}

export default Component;
