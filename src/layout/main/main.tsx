import FilmDetails from "@components/film-details/film-details.connect";
import { Switch, Route } from "react-router-dom";
import { RoutePathes } from "@constants/contants";
import FilmList from "@components/film-list/film-list.connect";
import NotFound from "@components/not-found/not-found";
import Routes from "../../routes/routes";
import { withRouter } from "react-router-dom";

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="main">
      <Routes />
    </div>
  );
};

export default Main;
