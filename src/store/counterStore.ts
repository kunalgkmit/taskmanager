import { create } from 'zustand';

type CounterStore = {
  count: number;
  twiceofCount: number;
  increment: () => void;
  decrement: () => void;
  twice: () => void;
};

export const useCounterStore = create<CounterStore>(set => ({
  count: 0,
  twiceofCount: 1,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  twice: () => set(state => ({ twiceofCount: state.twiceofCount * 2 })),
}));
