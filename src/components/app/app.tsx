import Main from "../../layout/main/main.connect";
import AsideMenu from "../../layout/aside-menu/aside-menu.connect";

const App: React.FC = () => {
  return (
    <div className="app">
      <AsideMenu />
      <Main />
    </div>
  );
};

export default App;
