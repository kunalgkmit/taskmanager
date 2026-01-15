import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type AuthStoreType = {
  isAuth: boolean;
  isHydrated: boolean;
};

export const useAuthStore = create<AuthStoreType>()(
  persist(
    set => ({
      isAuth: false,
      isHydrated: false,
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => {
        console.log('hydration starts');

        return () => {
          useAuthStore.setState({ isHydrated: true });
          console.log('hydration completed');
        };
      },
    },
  ),
);
