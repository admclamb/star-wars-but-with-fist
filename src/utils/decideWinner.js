export const decideWinner = (fighter1, fighter2) => {
  const factors = {
    height: null,
    mass: null,
  };
  if (fighter1.height > fighter2.height && fighter1.mass > fighter2.mass) {
    return fighter1.name;
  } else if (
    (fighter1.height < fighter2.height && fighter1.mass > fighter2.mass) ||
    (fighter1.height > fighter2.height && fighter1.mass < fighter2.mass)
  ) {
    return "Tie";
  } else {
    return fighter2.name;
  }
};
