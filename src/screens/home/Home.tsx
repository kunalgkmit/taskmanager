import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.ts';
import React, { useState } from 'react';
import { TaskCard } from '../../components/taskCard';
import ModalForm from '../../components/modalForm';

type Task = {
  title: string;
  priority: number;
  description: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard {...item} />}
        ListEmptyComponent={<Text>No tasks to display</Text>}
      />

      <ModalForm addTask={addTask} />
    </View>
  );
}
