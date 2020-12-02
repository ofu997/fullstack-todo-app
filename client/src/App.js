import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginView from "./views/auth/LoginView";
import DddView from "./views/auth/Ddd";

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/ddd" component={DddView} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
