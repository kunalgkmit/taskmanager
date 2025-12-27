import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.ts';
import React, { useState } from 'react';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';

type Task = {
  title: string;
  priority: number;
  description: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    console.log(tasks);
  };

  const deleteTask = (idToDelete: number) => {
    const updatedTasks = tasks.filter((item, index) => index !== idToDelete);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskCard {...item} index={index} deleteTask={deleteTask} />
        )}
        ListEmptyComponent={<Text>No tasks to display</Text>}
      />

      <AddTaskModalForm addTask={addTask} />
    </View>
  );
}
