import { RouteProp, useRoute } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import AppBar from '../../components/appBar';
import { useCounter } from '../../contexts/CounterContext';

export default function ProfileScreen() {
  const route = useRoute<RouteProp<BottomTabNavTypes>>();
  const countContext = useCounter();
  console.log('PROFILE>>>>>>>');

  return (
    <View>
      <AppBar title="Profile" showDrawer={true} />
      <Text>This is PROFILE SECTION!</Text>
      <Text>{countContext?.count}</Text>
      <Button title="Increse" onPress={countContext?.increment} />
      <Button title="Decrease" onPress={countContext?.decrement} />
    </View>
  );
}
