import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Login from './templates/LoginPage'


export default function Router() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}