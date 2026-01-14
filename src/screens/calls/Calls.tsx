import { View, Text, Button } from 'react-native';
import { createMMKV, MMKV } from 'react-native-mmkv';
import AppBar from '../../components/appBar';
import { styles } from './styles';
import { useTaskStore } from '../../store/taskStore';

const storage = createMMKV();

export default function CallScreen() {
  const tasks = useTaskStore(state => state.tasks);
  const saveData = () => {
    storage.set('TASKS', JSON.stringify(tasks));
    console.log('TASKS saved>>>>>');
  };
  const fetchData = () => {
    const fetchedData = storage.getString('TASKS');
    if (fetchedData) {
      console.log('TASKS fetched>>>>>', fetchedData);
    }
  };
  return (
    <View>
      <AppBar title="Calls" showDrawer={true} />
      <View style={styles.container}>
        <Text>This is Calls Tab</Text>
        <Button title="SAVE DATA" onPress={saveData} />
        <Button title="FETCH DATA" onPress={fetchData} />
      </View>
    </View>
  );
}
