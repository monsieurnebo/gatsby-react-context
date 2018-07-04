import React from "react";
import PropTypes from "prop-types";
import { connectToContext } from "../context";

@connectToContext("isPowerOn", "togglePower")
export default class IndexPage extends React.PureComponent {

  static propTypes = {
    isPowerOn   : PropTypes.bool.isRequired,
    togglePower : PropTypes.func.isRequired
  };

  render() {
    const { isPowerOn, togglePower } = this.props;

    return (
      <div>
        <p>
          This basic example makes use of the <a href="https://reactjs.org/docs/context.html" rel="noopener noreferrer" target="_blank">new React Context API</a> with GatsbyJS!
        </p>
        <h1>Is the power ON?</h1>
        <h2>{isPowerOn ? "✅ Yes!" : "🚨 Nop!"}</h2>
        <button onClick={() => togglePower()}>
          Toggle power!
        </button>
      </div>
    );
  }

}
