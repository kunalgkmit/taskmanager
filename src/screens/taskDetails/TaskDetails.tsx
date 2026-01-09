import React from 'react';
import { View, Text } from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { styles } from './styles';
import AppBar from '../../components/appBar';

export default function TaskDetailsScreen() {
  const navigation = useNavigation<StackNavProp>();

  const route = useRoute<TaskDetailsProps>();
  const task = route.params?.task;
  console.log(task);

  useFocusEffect(
    React.useCallback(() => {
      navigation.getParent()?.setOptions({ swipeEnabled: false });
      return () => {
        navigation.getParent()?.setOptions({ swipeEnabled: true });
      };
    }, [navigation]),
  );

  return (
    <View style={styles.container}>
      <AppBar title="Task Details" showDrawer={false} />
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.label}>Title</Text>
          <Text style={styles.value}>{task?.title}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Priority</Text>
          <Text style={styles.value}>{task?.priority}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{task?.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>
            {task?.status ? 'Completed' : 'Pending'}
          </Text>
        </View>
      </View>
    </View>
  );
}
