import { CardType } from "./types";

const rePositionCards = (cards: CardType[]) => {
  return cards.map((item, index) => ({ ...item, position: index }));
};

export { rePositionCards };
