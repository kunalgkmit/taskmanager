import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default function ChatScreen() {
  return (
    <View>
      <Text>This is CHAT SCREEN!</Text>
      {/* <Button title="Button" onPress={() => navigation.navigate('Profile')} /> */}
    </View>
  );
}
