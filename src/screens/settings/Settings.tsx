import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../../components/appBar';
import { useCounter } from '../../contexts/CounterContext';

export default function SettingsScreen() {
  const navigation = useNavigation<TabNavigationProp>();
  const countContext = useCounter();
  console.log('SETTINGS>>>>>>>>');

  return (
    <View>
      <AppBar title="Settings" showDrawer={false} />
      <Text>Settings Content Here</Text>
      <Text>{countContext?.count}</Text>
    </View>
  );
}
