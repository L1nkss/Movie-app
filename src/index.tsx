import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@redux/store";
import "./style/style.scss";
import App from "@components/app/app";
// import { Router } from "react-router-dom";
import { BrowserRouter, Router } from "react-router-dom";
import history from "./utils/history";

// Для тестов

// import { getFilmsRequest } from "@redux/reducers/films/actions/actions";
// store.dispatch(getFilmsRequest("popular"));

//

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    {/*<BrowserRouter>*/}
      <App />
    {/*</BrowserRouter>*/}
    </Router>
  </Provider>,
  document.getElementById("root"),
);
