import { useState } from 'react';

function useLocalStorage(key: string, initialValue: string): [string, (_: string) => void] {
  const [storedValue, setStoredValue] = useState<string>(() => {
    const item = localStorage.getItem(key);
    if (item) {
      return item;
    }
    localStorage.setItem(key, initialValue);
    return initialValue;
  });

  const setValue = (value: string) => {
    setStoredValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}

export { useLocalStorage };
