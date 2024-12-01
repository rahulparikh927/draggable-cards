import { useState } from "react";

export const useLocalStorage = (key: string, initialValue?: unknown) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setLocalStorage = (value: unknown) => {
    try {
      setLocalStorageValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };

  return [localStorageValue, setLocalStorage];
};

export default useLocalStorage;
