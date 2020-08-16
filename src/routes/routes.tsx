import {
  Switch, Route, Redirect,
} from "react-router-dom";
import { RoutePathes } from "@constants/contants";
import FilmList from "@components/film-list/film-list.connect";
import FilmDetails from "@components/film-details/film-details";

const Routes = () => {
  return (
    // <DebugRouter>
    <Switch>
      <Route path={RoutePathes.MOVIES} exact component={FilmList} />
      <Route path={`${RoutePathes.FILM_DETAILS}/:id?`} component={FilmDetails} />
      <Route path={RoutePathes.ROOT} exact>
        <Redirect to={RoutePathes.MOVIES} />
      </Route>
      <Route path={RoutePathes.NOT_FOUND} />
    </Switch>
    // </DebugRouter>
  );
};

export default Routes;
