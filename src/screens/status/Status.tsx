import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppBar from '../../components/appBar';
import { styles } from './styles';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTaskStore } from '../../store/taskStore';

export default function StatusScreen() {
  const [data, setData] = useState('');
  const originalTasks = useTaskStore(state => state.tasks);

  const navigation = useNavigation<TabNavigationProp>();

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('TASKS', JSON.stringify(originalTasks));
      let tasks = ['TASKS', JSON.stringify(originalTasks)];

      // await AsyncStorage.multiSet(originalTasks);
      // let keys = await AsyncStorage.getAllKeys();
      // console.log(keys);
      // AsyncStorage.clear();
      // keys = await AsyncStorage.getAllKeys();
      // console.log(keys);
    } catch (e) {
      console.log(e);
    }
  };

  const getData = async () => {
    try {
      // let fetchedData = await AsyncStorage.multiGet(['TASKS', 'TASK ID']);
      const fetchedData = await AsyncStorage.getItem('TASKS');
      if (fetchedData) {
        console.log('GETTING DATA>>>>', JSON.parse(fetchedData));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem('TASKS');
      console.log('DELETING DATA>>>>');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <AppBar title="Status" showDrawer={true} />
      <View style={styles.container}>
        <TextInput
          placeholder="Enter data:"
          style={{ borderWidth: 1 }}
          value={data}
          onChangeText={setData}
        />
        <Text>This is Status Screen!</Text>
        <Button title="SAVE DATA" onPress={saveTasks} />
        <Button title="DISPLAY DATA" onPress={getData} />
        <Button title="DELETE DATA" onPress={deleteData} />
      </View>
    </View>
  );
}
