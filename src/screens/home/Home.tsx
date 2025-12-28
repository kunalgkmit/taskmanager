import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import NoTasksToDiaplay from '../../components/noTasksToDisplay';

type Task = {
  taskId: number;
  title: string;
  priority: string;
  description: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const id = tasks.length + 1;

  const addTask = (task: Task) => {
    task = { ...task, taskId: id };
    setTasks([...tasks, task]);
  };

  const deleteTask = (idToDelete: number) => {
    const updatedTasks = tasks.filter(item => item.taskId !== idToDelete);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask: Task, idToUpdate: number) => {
    const index = tasks.findIndex(item => item.taskId === idToUpdate);
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1, updatedTask);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={tasks.length > 0}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard {...item} deleteTask={deleteTask} updateTask={updateTask} />
        )}
        ListEmptyComponent={<NoTasksToDiaplay />}
      />

      <AddTaskModalForm addTask={addTask} />
    </View>
  );
}
