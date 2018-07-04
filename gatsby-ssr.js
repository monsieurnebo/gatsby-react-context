import React from "react";
import { renderToString } from "react-dom/server";
import ContextProvider from "./src/context";

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {

  const App = () => {
    return (
      <ContextProvider>
        {bodyComponent}
      </ContextProvider>
    );
  };

  const body = renderToString(<App />);

  replaceBodyHTMLString(body);
};
