import React, { Fragment } from "react";

import Portal from "./Portal";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.scoutRef = React.createRef();
  }

  state = {
    rect: {}
  };

  componentDidMount() {
    this._getPosition();
    // TODO: Throttle these
    window.addEventListener("scroll", this._getPosition);
    window.addEventListener("resize", this._getPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._getPosition);
    window.removeEventListener("resize", this._getPosition);
  }

  _getPosition = () => {
    if (this.scoutRef.current) {
      const rect = this.scoutRef.current.parentElement.getBoundingClientRect();
      this.setState(() => ({ rect }));
    }
  };

  render() {
    return (
      <Fragment>
        <Portal>
          <div
            style={{
              position: "fixed",
              left: this.state.rect.left,
              top: this.state.rect.top,
              bottom: this.state.rect.bottom,
              right: this.state.rect.right,
              width: this.state.rect.width,
              height: this.state.rect.height
            }}
          >
            {this.props.children}
          </div>
        </Portal>
        <span ref={this.scoutRef} />
      </Fragment>
    );
  }
}

export default Component;
