import { useState, useEffect } from 'react';

const subscribers = new Set<() => void>();

const notifySubscribers = () => {
  subscribers.forEach((callback) => callback());
};

const getVisibilityState = (): Record<string, boolean> => {
  return JSON.parse(localStorage.getItem('devVisibility') || '{}');
};

const setVisibilityState = (state: Record<string, boolean>) => {
  localStorage.setItem('devVisibility', JSON.stringify(state));
  notifySubscribers();
};

export const useDevVisibility = (id: string): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    const storedState = getVisibilityState();
    return storedState[id] ?? true; // Visible por defecto
  });

  useEffect(() => {
    const callback = () => {
      const storedState = getVisibilityState();
      setIsVisible(storedState[id] ?? true);
    };

    subscribers.add(callback);
    return () => {
      subscribers.delete(callback);
    };
  }, [id]);

  useEffect(() => {
    const storedState = getVisibilityState();
    storedState[id] = isVisible;
    setVisibilityState(storedState);
  }, [isVisible, id]);

  return isVisible;
};
