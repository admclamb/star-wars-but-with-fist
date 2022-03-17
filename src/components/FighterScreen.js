import { useState } from "react";
import FightOutcome from "./FightOutcome";
import "./FighterScreen.css";
const FighterScreen = ({ fighter1, fighter2, restartFight }) => {
  const [beginFight, setBeginFight] = useState(false);
  return (
    <div className="fighter-screen bg-darkest text-light d-flex flex-column pt-5">
      <div className="d-flex justify-content-around">
        <section className="fighter-1">
          <h2 className="pb-4">Fighter 1</h2>
          <h4>{fighter1.name}</h4>
          <p className="height">Height: {fighter1.height}</p>
          <p className="mass">Mass: {fighter1.mass}</p>
        </section>
        <section className="fighter-2">
          <h2 className="pb-4">Fighter 2</h2>
          <h4>{fighter2.name}</h4>
          <p className="height">Height: {fighter2.height}</p>
          <p className="mass">Mass: {fighter2.mass}</p>
        </section>
      </div>
      <div className="begin-fight-btn text-center mt-5">
        {Object.keys(fighter1).length > 0 && Object.keys(fighter2).length > 0 && (
          <button
            className="btn btn-outline-light btn-lg"
            onClick={() => setBeginFight(true)}
          >
            Begin Fight
          </button>
        )}
      </div>
      {beginFight && (
        <>
          <FightOutcome
            fighter1={fighter1}
            fighter2={fighter2}
            beginFight={beginFight}
          />
          <div className="restart text-center">
            <button
              className="btn btn-lg btn-light"
              onClick={() => {
                restartFight();
                setBeginFight(false);
              }}
            >
              Restart Fight 🎇
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FighterScreen;
