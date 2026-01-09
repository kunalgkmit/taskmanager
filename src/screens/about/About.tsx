import React from 'react';
import { View, Text } from 'react-native';
import AppBar from '../../components/appBar';

export default function AboutScreen() {
  return (
    <View>
      <AppBar title="About" showDrawer={false} />
      <Text>About Content Here</Text>
    </View>
  );
}
