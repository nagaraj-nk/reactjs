import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./templates/Home";

import Login from './templates/LoginPage'


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}