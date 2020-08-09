import Header from "@components/header/header";

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="main">
      <Header />

      <div className="film-list">
        <a href="https://">
          <div className="film-card">
            <img className="film-card__image" src="image/mock-image.jpg" alt="Изображение" />
            <div className="film-card__wrapper">
              <h4>Название фильма</h4>
              <p>2016, 109 min</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Main;

