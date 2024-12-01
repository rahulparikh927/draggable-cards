import { useEffect, useState } from "react";
import { CardType } from "../types";
import useLocalStorage from "./localStorage.hooks";

export const CARD_LOCAL_STORAGE_KEY = "grid-cards";

const useGetCards = () => {
  const [localStorageValue, setLocalStorage] = useLocalStorage(
    CARD_LOCAL_STORAGE_KEY
  );
  const [cards, setCards] = useState<null | CardType[]>(
    localStorageValue ?? null
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!localStorageValue) {
      setIsLoading(true);
      fetch("/api/cards")
        .then((res) => res.json())
        .then((res) => {
          setCards(res);
          setLocalStorage(res);
          setIsLoading(false);
        });
    }
  }, []);

  return { cards, isLoading, setIsLoading, setCards };
};

export { useGetCards };
