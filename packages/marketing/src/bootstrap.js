import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// mount function to start the app
export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if running in isolation, call mount fn immediately.
if (process.env.NODE_ENV == "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el);
  }
}
// if running through container, export the mount function and it will be called from container instead.
