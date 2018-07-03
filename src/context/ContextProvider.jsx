import React from "react";
import PropTypes from "prop-types";
import Context from "./Context";

export default class ContextProvider extends React.PureComponent {

  static propTypes = {
    children : PropTypes.node.isRequired
  }

  constructor() {
    super();

    this.state = {
      isPowerOn   : false,
      togglePower : () => this.togglePower()
    };
  }

  togglePower() {
    const { isPowerOn } = this.state;
    this.setState({ isPowerOn: !isPowerOn });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }

}
