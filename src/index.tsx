import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "@redux/store";
import "./style/style.scss";
import App from "@components/app/app";

// Для тестов

// import { getFilmsRequest } from "@redux/reducers/films/actions/actions";
// store.dispatch(getFilmsRequest("popular"));

//

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
