import { View, Text } from 'react-native';
import AppBar from '../../components/appBar';

export default function CallScreen() {
  return (
    <View>
      <AppBar title="Calls" showDrawer={true} />
      <Text>This is Calls Tab</Text>
    </View>
  );
}
