import { useEffect, useState } from "react";
import FighterErrorMessage from "../errors/FighterErrorMessage";
import FighterCard from "./FighterCard";

const FightersList = ({ fighters, fighter, setCurrentFighter }) => {
  const [fighterIsPicked, setFighterIsPicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (fighter.hasOwnProperty("name")) {
      setFighterIsPicked(true);
    } else {
      setFighterIsPicked(false);
    }
  }, [fighter]);

  if (Array.isArray(fighters)) {
    const fightersArr = fighters.map((fighter, index) => {
      return (
        <FighterCard
          fighter={fighter}
          key={index}
          setCurrentFighter={setCurrentFighter}
          fighterIsPicked={fighterIsPicked}
          setFighterIsPicked={setFighterIsPicked}
          setErrorMessage={setErrorMessage}
        />
      );
    });
    return (
      <div className="fighter-list d-flex flex-column">
        {errorMessage && <FighterErrorMessage errorMessage={errorMessage} />}
        <div className="d-flex justify-content-between flex-wrap">
          {fightersArr}
        </div>
      </div>
    );
  }
  return <div>Not found</div>;
};

export default FightersList;
