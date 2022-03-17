import { decideWinner } from "../utils/decideWinner";
const FightOutcome = ({ fighter1, fighter2, beginFight }) => {
  return (
    <div className="fight-outcome">
      <h2 className="text-center mt-5 mb-5">
        Winner: {decideWinner(fighter1, fighter2)}
      </h2>
    </div>
  );
};

export default FightOutcome;
