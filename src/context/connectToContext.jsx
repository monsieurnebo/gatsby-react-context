import React from "react";
import Context from "./Context";

/**
 * @param {Array.<string>?} properties Context properties that will be connected
 * @returns {React.PureComponent} Component with context as proptypes
 */
export default function connectToContext(...properties) {

  return WrappedComponent => (

    class extends React.PureComponent {

      renderWrappedComponent(context) {
        const contextProperties = properties.reduce((accu, property) => {
          accu[property] = context[property];
          return accu;
        }, {});

        return <WrappedComponent {...this.props} {...contextProperties} />;
      }

      render() {
        return (
          <Context.Consumer>
            {context => this.renderWrappedComponent(context)}
          </Context.Consumer>
        );
      }

    }

  );

}
