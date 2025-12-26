import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.ts';
import React, { useState } from 'react';
import { TaskCard } from '../../components/taskCard';
import { TaskModal } from '../../components/taskModal';
import { TaskForm } from '../../components/taskForm';
import { Button as CustomButton } from '../../components/button';

type Task = {
  title: string;
  priority: number;
  description: string;
};

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard {...item} />}
        ListEmptyComponent={<Text>No tasks to display</Text>}
      />

      <TaskModal
        showModal={showModal}
        setShowModal={(visible: boolean) => setShowModal(visible)}
      >
        <TaskForm addTask={addTask} />
      </TaskModal>
      <CustomButton title={'Add New Task'} onPress={() => setShowModal(true)} />
    </View>
  );
}
