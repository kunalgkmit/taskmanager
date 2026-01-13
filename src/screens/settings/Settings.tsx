import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AppBar from '../../components/appBar';
import { useCounterStore } from '../../store/counterStore';

export default function SettingsScreen() {
  useEffect(() => {
    console.log('SETTINGS is mounted>>>>>>');
    return () => {
      console.log('SETTINGS got unmounted>>>>>>>');
    };
  }, []);
  // const navigation = useNavigation<TabNavigationProp>();
  // const countContext = useCounter();
  const twiceofCount = useCounterStore(state => state.twiceofCount);
  console.log('SETTINGS>>>>>>>>');

  return (
    <View>
      <AppBar title="Settings" showDrawer={false} />
      <Text>Settings Content Here</Text>
      <Text>{twiceofCount}</Text>
    </View>
  );
}
