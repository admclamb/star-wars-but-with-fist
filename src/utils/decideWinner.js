export const decideWinner = (fighter1, fighter2) => {
  console.log(fighter1, fighter2);
  if (
    Number(fighter1.height) > Number(fighter2.height) &&
    Number(fighter1.mass) > Number(fighter2.mass)
  ) {
    return fighter1.name;
  }
  if (
    Number(fighter2.height) > Number(fighter1.height) &&
    Number(fighter2.mass) > Number(fighter1.mass)
  ) {
    return fighter2.name;
  }
  return "Tie";
};
