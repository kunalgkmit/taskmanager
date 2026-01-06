import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function LoginScreen({ route, navigation }: LoginProps) {
  //   const navigation = useNavigation<LoginProps>();
  return (
    <View style={styles.continer}>
      <Text>This is Login Screen {route.params.name}!</Text>
      <Text>{route.params.count}</Text>
      <Button
        title="LOGOUT"
        onPress={() =>
          navigation.navigate('Logout', { message: 'Sample message' })
        }
      />
    </View>
  );
}
