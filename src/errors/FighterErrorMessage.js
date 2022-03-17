const FighterErrorMessage = ({ errorMessage }) => {
  return (
    <div className="alert bg-main text-dark">
      <p>{errorMessage}</p>
    </div>
  );
};

export default FighterErrorMessage;
