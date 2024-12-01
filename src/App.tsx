import { useEffect, useState } from "react";
import "./App.css";
import Grid from "./components/Grid";
import { CARD_LOCAL_STORAGE_KEY, useGetCards } from "./hooks/cards.hooks";
import useLocalStorage from "./hooks/localStorage.hooks";
import { Loader } from "./components/Loader";

const SAVE_INTERVAL_TIME = 5000;

function App() {
  const { isLoading, cards, setIsLoading, setCards } = useGetCards();
  const [isPositionChanged, setIsPositionChanged] = useState(false);
  const [, setLocalStorage] = useLocalStorage(CARD_LOCAL_STORAGE_KEY);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPositionChanged) {
        setIsLoading(true);
        setTimeout(() => {
          setLocalStorage(cards);
          setIsLoading(false);
          setIsPositionChanged(false);
        }, 1000);
      }
    }, SAVE_INTERVAL_TIME);
    return () => {
      clearInterval(interval);
    };
  }, [isPositionChanged, cards]);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 overflow-hidden">
        <h1 className="text-2xl font-bold mb-4 text-black">
          Drag and Drop Grid
        </h1>
        {cards && (
          <div className="w-[80%] m-auto">
            <Grid
              data={cards}
              setData={setCards}
              setIsPositionChanged={setIsPositionChanged}
            />
          </div>
        )}
        {isLoading && (
          <Loader loadingText={cards ? "saving..." : "loading..."} />
        )}
      </div>
    </>
  );
}

export default App;
