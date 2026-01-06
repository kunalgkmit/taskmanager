import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type WelcomeNavigationProp = NativeStackScreenProps<SampleStackList, 'Welcome'>;

export default function WelcomeScreen({ navigation }: WelcomeNavigationProp) {
  return (
    <View style={styles.continer}>
      <Text>This is Welcome Screen!</Text>
      <Button
        title="Login Page"
        onPress={() => {
          navigation.navigate('Login', {
            name: 'KUNAL',
            count: 1,
          });
        }}
      />
    </View>
  );
}
