import {
  Switch, Route, Redirect,
} from "react-router-dom";
import { RoutePathes } from "@constants/contants";
import FilmList from "@components/../pages/film-list/film-list.connect";
import FilmDetails from "@pages/film-details/film-details.connect";
import Actors from "@pages/actors/actors";
import Actor from "@pages/actor/actor";
import NotFound from "@components/not-found/not-found";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={RoutePathes.MOVIES} exact component={FilmList} />
      <Route path={`${RoutePathes.CAST}/:id?`} exact component={Actors} />
      <Route path={`${RoutePathes.ACTOR}/:id?`} exact component={Actor} />
      <Route path={`${RoutePathes.FILM_DETAILS}/:id?`} component={FilmDetails} />
      <Route path={RoutePathes.ROOT} exact>
        <Redirect to={RoutePathes.MOVIES} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
