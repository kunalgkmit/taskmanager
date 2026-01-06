import { View, Text, Button, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function WelcomeScreen() {
  const navigation = useNavigation<BottomWelcomeProps>();

  const [name, setName] = useState<string>('');

  const buttonHandle = () => {
    navigation.navigate('Tabs', { userName: name });
  };

  return (
    <View style={styles.container}>
      <Text>This is Welcome Screen</Text>
      <TextInput placeholder="Enter Username..." onChangeText={setName} />
      <Button title="Get Started" onPress={buttonHandle} />
    </View>
  );
}
