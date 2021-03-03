import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
