import {
  Switch, Route, Redirect,
} from "react-router-dom";
import { RoutePathes } from "@constants/contants";
import FilmList from "@components/film-list/film-list.connect";
import FilmDetails from "@pages/film-details/film-details.connect";
import Actors from "@pages/actors/actors";
import Actor from "@pages/actor/actor";

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
      <Route path={RoutePathes.NOT_FOUND} />
    </Switch>
  );
};

export default Routes;
