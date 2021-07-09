import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import BookAuthor from "./templates/BookAuthor";
import BookEditForm from "./templates/BookEdit";
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
        <Route path="/books">
          <BookAuthor />
        </Route>
        <Route path="/bookedit">
          <BookEditForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}