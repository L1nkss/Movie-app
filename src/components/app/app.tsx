// import { Router } from "react-router-dom";
import Main from "../../pages/main/main";
import AsideMenu from "../../pages/aside-menu/aside-menu.connect";
// import history from "../../utils/history";

const App: React.FC = () => {
  return (
    <div className="app">
      <AsideMenu />
      <Main />
    </div>
  );
};

export default App;
