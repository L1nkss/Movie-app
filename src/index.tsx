import ReactDOM from "react-dom";

import "./style/style.scss";

const App = () => {
  return (
    <div className="app">
      {/* Боковое меню */}
      <aside className="side-menu">
        <div>
          <img width={100} src="image/watch-movie.svg" alt="Лого" />
        </div>
        <div>
          <h3>Фильмы</h3>
          <ul className="menu-list">
            <li className="menu-list__item menu-list__item--active">
              <span className="menu-list__item-icon fas fa-heart" />
              Популярные
            </li>
            <li className="menu-list__item">
              <span className="menu-list__item-icon fas fa-chart-line" />
              Самые популярные
            </li>
            <li className="menu-list__item">
              <span className="menu-list__item-icon fas fa-table" />
              Скоро в кино
            </li>
          </ul>
        </div>
        <div>
          <h3>Жанры</h3>
          <ul>
            <li className="menu-list__item">
              <span className="menu-list__item-icon fas fa-dot-circle" />
              Жанр 1
            </li>
            <li className="menu-list__item">
              <span className="menu-list__item-icon fas fa-dot-circle" />
              Жанр 1
            </li>
            <li className="menu-list__item">
              <span className="menu-list__item-icon fas fa-dot-circle" />
              Жанр 1
            </li>
          </ul>
        </div>
      </aside>
      {/* Основная страница */}
      <div className="main">
        <div className="header">
          <h2>Популярные</h2>
          <form className="search-form">
            <div>
              <span className="search-form__icon fas fa-search" />
              <input className="search-form__input" type="text" placeholder="Найти фильм..." />
            </div>
          </form>
        </div>

        <div className="film-list">
          <a href="https://" className="film-card">
            <div className="film-card">
              <img src="image/mock-image.jpg" alt="Изображение" />
              <div>
                <h4>Название фильма</h4>
                <div>
                  <span>Рейтинг</span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://" className="film-card">
            <div className="film-card">
              <img src="image/mock-image.jpg" alt="Изображение" />
              <div>
                <h4>Название фильма</h4>
                <div>
                  <span>Рейтинг</span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://" className="film-card">
            <div className="film-card">
              <img src="image/mock-image.jpg" alt="Изображение" />
              <div>
                <h4>Название фильма</h4>
                <div>
                  <span>Рейтинг</span>
                </div>
              </div>
            </div>
          </a>
          <a href="https://" className="film-card">
            <div className="film-card">
              <img src="image/mock-image.jpg" alt="Изображение" />
              <div>
                <h4>Название фильма</h4>
                <div>
                  <span>Рейтинг</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
