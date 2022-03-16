import React, { useEffect, useState } from "react";
import { getFighters } from "../api/getFighters";
import FightersList from "../components/FightersList";
import FighterScreen from "../components/FighterScreen";
import "./Home.css";
const Home = () => {
  const [fighters, setFighters] = useState([]);
  const [fighter1, setFighter1] = useState({});
  const [fighter2, setFighter2] = useState({});
  const [fighterReset, setFighterReset] = useState(false);
  useEffect(() => {
    setFighters({});
    const abortController = new AbortController();

    async function getFighterData() {
      const fighterData = await getFighters(abortController);
      setFighters(fighterData.results);
    }
    getFighterData();
    return () => abortController.abort();
  }, []);

  const restartFight = () => {
    setFighter1({});
    setFighter2({});
    setFighterReset(true);
  };
  return (
    <div className="bg-darker home">
      <header>
        <nav className="navbar bg-dark">
          <div className="container">
            <h1 className="display-1 color-main navbar-brand">
              Star Wars but with fist
            </h1>
          </div>
        </nav>
        <div className="hero d-flex container d-flex flex-column justify-content-center">
          <h2 className="color-main">
            Ever imagined what Star Wars fights would be like without weapons?
          </h2>
          <p className="text-light">
            Dont worry anymore, This is a game where you can see who would fight
            with Mans first weapons... their fist.
          </p>
        </div>
      </header>
      <main className="text-light mt-5">
        <div className="container mb-5">
          <div className="fighter-1">
            <h4 className="mb-5">Choose Your first fighter</h4>
            {fighters && (
              <FightersList
                fighters={fighters}
                fighter={fighter1}
                setCurrentFighter={setFighter1}
              />
            )}
          </div>
          <div className="fighter-2 mt-5">
            <h4 className="mb-5">Choose Your Second fighter</h4>
            {fighters && (
              <FightersList
                fighter={fighter2}
                fighters={fighters}
                setCurrentFighter={setFighter2}
              />
            )}
          </div>
        </div>

        {fighter1 && fighter2 && (
          <FighterScreen
            fighter1={fighter1}
            fighter2={fighter2}
            restartFight={restartFight}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
