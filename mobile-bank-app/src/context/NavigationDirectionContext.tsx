// context/NavigationDirectionContext.tsx
import { createContext, useContext, useState } from 'react';

const NavigationDirectionContext = createContext({
  direction: 'forward',
  setDirection: (dir: 'forward' | 'backward') => {},
});

export function NavigationDirectionProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  return (
    <NavigationDirectionContext.Provider value={{ direction, setDirection }}>
      {children}
    </NavigationDirectionContext.Provider>
  );
}

export const useNavigationDirection = () => useContext(NavigationDirectionContext);
