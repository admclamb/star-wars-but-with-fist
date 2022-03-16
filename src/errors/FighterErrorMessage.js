const FighterErrorMessage = ({ errorMessage }) => {
  return (
    <div className="bg-danger p-3 d-flex  align-items-center">
      <p>{errorMessage}</p>
    </div>
  );
};

export default FighterErrorMessage;
