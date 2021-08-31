import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { AddProperty } from "../components/AddProperty";
import { HomePage } from "../pages/HomePage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/add">
          <AddProperty />
        </Route>

        <Route path="/home">
          <HomePage />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
