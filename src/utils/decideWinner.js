export const decideWinner = (fighter1, fighter2) => {
  if (+fighter1.height > +fighter2.height && +fighter1.mass > +fighter2.mass)
    return fighter1.name;
  if (+fighter2.height > +fighter1.height && +fighter2.mass > +fighter1.mass)
    return fighter2.name;
  return "Tie";
};
