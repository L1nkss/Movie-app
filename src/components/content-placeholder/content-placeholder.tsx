const ContentPlaceholder: React.FC<any> = (props: any): JSX.Element => {
  const renderPlaceholder = () => {
    const result = [];

    for (let i = 0; i < props.count; i++) {
      const html = (
        <div className="placeholder">
          <div className="placeholder__wrapper">
            <span className="placeholder__rating" />
          </div>
        </div>
      );

      result.push(html);
    }

    return result;
  };
  return (
    <>
      {renderPlaceholder()}
    </>
  );
};

export default ContentPlaceholder;
