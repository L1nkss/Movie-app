const Header: React.FC = () => {
  return (
    <div className="header">
      <h2>Популярные</h2>
      <form className="search-form">
        <div>
          <span className="search-form__icon fas fa-search" />
          <input className="search-form__input" type="text" placeholder="Найти фильм..." />
        </div>
      </form>
    </div>
  );
};

export default Header;
