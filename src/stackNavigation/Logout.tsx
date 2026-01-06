import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function LogoutScreen() {
  const route = useRoute<RouteProp<SampleStackList, 'Logout'>>();
  console.log(route.params.message);
  const navigation = useNavigation<StackNavigation>();
  return (
    <View style={styles.continer}>
      <Text>This is Logout Screen!</Text>
      <Button title="Go Back" onPress={() => navigation.pop(2)} />
    </View>
  );
}
