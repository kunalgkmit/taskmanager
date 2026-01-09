import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../../components/appBar';

export default function SettingsScreen() {
  const navigation = useNavigation<TabNavigationProp>();

  return (
    <View>
      <AppBar title="Settings" showDrawer={false} />
      <Text>Settings Content Here</Text>
    </View>
  );
}
