import Main from "../../pages/main/main";
import AsideMenu from "../../pages/aside-menu/aside-menu.connect";

const App: React.FC = () => {
  return (
    <div className="app">
      <AsideMenu />
      <Main />
    </div>
  );
};

export default App;
