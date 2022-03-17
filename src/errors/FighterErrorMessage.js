const FighterErrorMessage = ({ errorMessage }) => {
  return (
    <div className="alert alert-warning">
      <p>{errorMessage}</p>
    </div>
  );
};

export default FighterErrorMessage;
