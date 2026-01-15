import { NavigationContainer } from '@react-navigation/native';
import DrawerTabScreen from './DrawerNav';
import AuthStackNavigator from './AuthStack';
import { useAuthStore } from '../store/authStore';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

// export default function Routes() {
//   const isAuth = useAuthStore(state => state.isAuth);
//   const [hasHydrated, setHasHydrated] = useState(true);
//   const unsub = useAuthStore.persist.onFinishHydration(() => {
//     setHasHydrated(false);
//     console.log('HYDRATION FINISHED using onFinishHydration');
//   });

//   useEffect(() => {
//     return () => {
//       unsub?.();
//     };
//   }, [unsub]);

//   if (hasHydrated) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="large" />
//       </View>
//     );
//   }

//   return (
//     <NavigationContainer>
//       {!isAuth ? <AuthStackNavigator /> : <DrawerTabScreen />}
//     </NavigationContainer>
//   );
// }

export default function Routes() {
  const isAuth = useAuthStore(state => state.isAuth);
  const isHydrated = useAuthStore(state => state.isHydrated);

  if (!isHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {!isAuth ? <AuthStackNavigator /> : <DrawerTabScreen />}
    </NavigationContainer>
  );
}
