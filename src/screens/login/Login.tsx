import { Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import { useTaskStore } from '../../store/taskStore';
import { useAuthStore } from '../../store/authStore';

export default function LoginScreen() {
  const navigation = useNavigation<AuthStackProp>();

  const loginHandle = () => {
    useAuthStore.setState({
      isAuth: true,
    });
  };

  return (
    <View>
      <Text>This is Login Screen</Text>
      <Button title="LOGIN" onPress={loginHandle} />
    </View>
  );
}
