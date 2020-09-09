interface IRating {
  containerClass: string,
  voteCount: number,
  voteAverage: number
}

const Rating: React.FC<IRating> = (props: IRating): JSX.Element => {
  return (
    <div className={`rating ${props.containerClass}`}>
      <i className="fas fa-star rating__start" />
      <div className="rating__inner">
        <div>
          <strong>{props.voteAverage}</strong>
          {" "}
          / 10
        </div>
        <span className="rating__vote-count">{props.voteCount}</span>
      </div>
    </div>
  );
};

export default Rating;
