import * as React from 'react';
import * as debounce from 'debounce';

import Portal from './Portal';

type Props = {
  debounce?: number;
  parentRef?: any;
  children: (parentRect: ClientRect) => React.ReactNode;
};

type State = {
  parentRect: ClientRect;
};

class Component extends React.Component<Props, State> {
  static defaultProps = {
    debounce: 16,
  };

  childRef = React.createRef<HTMLSpanElement>();

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

  getParentPosition = () => {
    const { parentRef } = this.props;
    const parentRect =
      (parentRef && parentRef.current && parentRef.current.getBoundingClientRect()) ||
      (parentRef && parentRef.getBoundingClientRect()) ||
      (this.childRef.current && this.childRef.current.parentElement.getBoundingClientRect());
    if (parentRect) {
      this.setState(() => ({ parentRect }));
    }
  };

  debouncedGetPosition = debounce(this.getParentPosition, this.props.debounce);

  componentDidMount() {
    this.getParentPosition();
    window.addEventListener('scroll', this.debouncedGetPosition, true);
    window.addEventListener('resize', this.debouncedGetPosition, true);
  }

  componentWillReceiveProps() {
    this.getParentPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.debouncedGetPosition, true);
    window.removeEventListener('resize', this.debouncedGetPosition, true);
  }

  render() {
    return (
      <React.Fragment>
        <Portal>{this.props.children(this.state.parentRect)}</Portal>
        {!this.props.parentRef && <span style={{ display: 'none' }} ref={this.childRef} />}
      </React.Fragment>
    );
  }
}

export default Component;
