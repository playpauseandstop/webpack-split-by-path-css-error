import "normalize.css/normalize.css";
import "font-awesome/css/font-awesome.css";
import "../css/app.css";

import React, {Component} from "react";
import Router, {
  DefaultRoute,
  HistoryLocation,
  Route,
  RouteHandler,
} from "react-router";


class App extends Component {
  render() {
    return (
      <div className="app">
        <RouteHandler />
      </div>
    );
  }
}


export const run = function(element) {
  const routes = (
    <Route handler={App} name="app">
      <DefaultRouter handler={Dashboard} name="dashboard" />
    </Route>
  );

  return Router.run(routes, HistoryLocation, Handler => {
    React.render(<Handler />, element);
  });
}


export default {
  React,
  run,
};
