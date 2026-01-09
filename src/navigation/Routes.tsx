import { NavigationContainer } from '@react-navigation/native';
import DrawerTabScreen from './DrawerNav';

export default function Routes() {
  return (
    <NavigationContainer>
      <DrawerTabScreen />
    </NavigationContainer>
  );
}
