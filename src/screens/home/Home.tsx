import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';

type Task = {
  taskId: number;
  title: string;
  priority: number;
  description: string;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const id = tasks.length + 1;

  const addTask = (task: Task) => {
    task = { ...task, taskId: id };
    setTasks([...tasks, task]);
    console.log(tasks);
  };

  const deleteTask = (idToDelete: number) => {
    const updatedTasks = tasks.filter(item => item.taskId !== idToDelete);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask: Task, idToUpdate: number) => {
    const index = tasks.findIndex(item => item.taskId === idToUpdate);
    console.log(idToUpdate);
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1, updatedTask);
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <TaskCard
            {...item}
            index={index}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        )}
        ListEmptyComponent={<Text>No tasks to display</Text>}
      />

      <AddTaskModalForm addTask={addTask} />
    </View>
  );
}
