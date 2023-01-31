import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// mount function to start the app
export const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory ?? createMemoryHistory();
  if (onNavigate) {
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname: currentPathname } = history.location;
      if (nextPathname !== currentPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// if running in isolation, call mount fn immediately.
if (process.env.NODE_ENV == "development") {
  const el = document.querySelector("#_auth-dev-root");
  if (el) {
    mount(el, {defaultHistory: createBrowserHistory()});
  }
}
// if running through container, export the mount function and it will be called from container instead.
