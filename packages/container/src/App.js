import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
const AuthApp = React.lazy(() => import("./components/AuthApp"));
const MarketingApp = React.lazy(() => import("./components/MarketingApp"));
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <React.Suspense fallback={<div>loading..</div>}>
            <Switch>
              <Route path="/auth" component={AuthApp} />
              <Route path="/" component={MarketingApp} />
            </Switch>
          </React.Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
