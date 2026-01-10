import { createContext, ReactNode, useContext, useState } from 'react';

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const CountContext = createContext<CounterContextType>({
  count: 1,
  increment: () => null,
  decrement: () => null,
});

export default function CountContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
}

export const useCounter = () => {
  const context = useContext(CountContext);
  return context;
};
