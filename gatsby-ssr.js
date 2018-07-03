import React from "react";
import { renderToString } from "react-dom/server";
import ContextProvider from "./src/context";

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents
}) => {

  const app = (
    <ContextProvider>
      {bodyComponent}
    </ContextProvider>
  );

  const body = renderToString(app);

  replaceBodyHTMLString(body);
}
