import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@redux/store";
import "./style/style.scss";
import App from "@components/app/app";
import { Router } from "react-router-dom";
import history from "./utils/history";

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root"),
);
