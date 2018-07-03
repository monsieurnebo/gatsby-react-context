import React from "react";
import { Router } from "react-router-dom";
import ContextProvider from "./src/context";

export const replaceRouterComponent = ({ history }) => {

  const ConnectedRouterWrapper = ({ children }) => (
    <ContextProvider>
      <Router history={history}>
        {children}
      </Router>
    </ContextProvider>
  );

  return ConnectedRouterWrapper;
}
