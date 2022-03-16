import "./FighterCard.css";

const FighterCard = ({
  fighter = {},
  setCurrentFighter,
  fighterIsPicked,
  setFighterIsPicked,
  setErrorMessage,
}) => {
  if (!fighter) return null;
  const { name } = fighter;
  const pickFighter = () => {
    if (!fighterIsPicked) {
      setCurrentFighter(fighter);
      setFighterIsPicked(true);
    } else {
      setErrorMessage("Fighter Has already been selected");
    }
  };
  return (
    <div className="fighter-card p-2">
      <p onClick={pickFighter} className="fighter-select">
        {name}
      </p>
    </div>
  );
};

export default FighterCard;
