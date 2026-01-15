import { View, Text, Button } from 'react-native';
import { createMMKV, MMKV } from 'react-native-mmkv';
import AppBar from '../../components/appBar';
import { styles } from './styles';
import { useTaskStore } from '../../store/taskStore';

const storage = createMMKV({
  id: `tasks-12345`,
});

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
  const saveNumber = () => {
    storage.set('NUMBER', 100);
  };
  const getNumber = () => {
    const fetchedNumber = storage.getString('NUMBER');
    console.log('FETCHED NUMBER>>>>>', typeof fetchedNumber);

    if (fetchedNumber) {
      console.log('FETCHED NUMBER>>>>>', fetchedNumber);
    }
  };

  const saveString = () => {
    storage.set('FULL-NAME', 'KUNAL PRAJAPAT');
  };
  const getString = () => {
    const fetchedName = storage.getNumber('FULL-NAME');
    if (fetchedName) {
      console.log('FETCHED NAME>>>>>', fetchedName);
    }
  };
  return (
    <View>
      <AppBar title="Calls" showDrawer={true} />
      <View style={styles.container}>
        <Text>This is Calls Tab</Text>
        <Button title="SAVE TASKS" onPress={saveData} />
        <Button title="FETCH TASKS" onPress={fetchData} />
        <Button title="SAVE NUMBER" onPress={saveNumber} />
        <Button title="FETCH NUMBER" onPress={getNumber} />
        <Button title="SAVE STRING" onPress={saveString} />
        <Button title="FETCH STRING" onPress={getString} />
      </View>
    </View>
  );
}
