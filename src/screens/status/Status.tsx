import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../../components/appBar';

export default function StatusScreen() {
  const navigation = useNavigation<TabNavigationProp>();
  return (
    <View>
      <AppBar title="Status" showDrawer={true} />
      <Text>This is Status Screen!</Text>
    </View>
  );
}
