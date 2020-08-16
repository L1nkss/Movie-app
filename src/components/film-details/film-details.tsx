const FilmDetails: React.FC = (props): JSX.Element => {
  return (
    <div className="film-details">
      <div className="film-details__poster">
        <img src="/image/mock-image.jpg" alt="Изображение" />
      </div>
      <div className="film-details__wrapper">
        <div className="film-details__header">
          <div className="film-details__header-inner">
            <h1 className="film-details__header-text">Work It</h1>
            <h3 className="film-details__header-subtext">Dance to your own beat.</h3>
          </div>
          <p className="film-details__header-information">
            8.7/93 min. / 2020
          </p>
        </div>
        <div className="film-details__genres">
          <h4>Жанры</h4>
          <ul className="film-details__genres-list">
            <li>comedy</li>
            <li>music</li>
          </ul>
        </div>
        <div className="film-details__description">
          <h4>Описание</h4>
          <p>
            A brilliant but clumsy high school senior vows to get into her late
            fathers alma mater by transforming herself and a misfit squad into dance champions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FilmDetails;
