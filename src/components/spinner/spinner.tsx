interface ISpinnerProps {
  isWrapperFull?: boolean,
  wrapperClass?: string,
}

const Spinner: React.FC<ISpinnerProps> = (props: ISpinnerProps) => {
  return (
    <div className={`${props.isWrapperFull ? "spinner-wrapper" : props.wrapperClass}`}>
      <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
      </svg>
    </div>
  );
};

Spinner.defaultProps = {
  isWrapperFull: true,
  wrapperClass: "",
};

export default Spinner;
