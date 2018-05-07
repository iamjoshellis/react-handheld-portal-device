import React, { Fragment } from "react";
import debounce from "debounce";

import Portal from "./Portal";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.childRef = React.createRef();
  }

  static defaultProps = {
    debounce: 50
  };

  state = {
    rect: {}
  };

  componentDidMount() {
    this._getPosition();
    window.addEventListener("scroll", this._debouncedGetPosition);
    window.addEventListener("resize", this._debouncedGetPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._debouncedGetPosition);
    window.removeEventListener("resize", this._debouncedGetPosition);
  }

  _getPosition = () => {
    if (this.childRef.current) {
      const rect = this.childRef.current.parentElement.getBoundingClientRect();
      this.setState(() => ({ rect }));
    }
  };

  _debouncedGetPosition = debounce(this._getPosition, this.props.debounce);

  render() {
    return (
      <Fragment>
        <Portal>
          <div
            {...this.props}
            style={{
              position: "fixed",
              pointerEvents: "none",
              left: this.state.rect.left,
              top: this.state.rect.top,
              bottom: this.state.rect.bottom,
              right: this.state.rect.right,
              width: this.state.rect.width,
              height: this.state.rect.height,
              ...this.props.style
            }}
          >
            {this.props.children}
          </div>
        </Portal>
        <span ref={this.childRef} />
      </Fragment>
    );
  }
}

export default Component;
