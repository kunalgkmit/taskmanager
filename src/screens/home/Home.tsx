import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.tsx';
import React, { useState } from 'react';
import Taskcard from '../../components/taskcard/Taskcard.tsx';
import Taskmodal from '../../components/taskmodal/Taskmodal.tsx';
import Taskform from '../../components/taskform/Taskform.tsx';
import CustomButton from '../../components/button/Button.tsx';

type Task = {
  title: string;
  priority: number;
  description: string;
};

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (
    taskTitle: string,
    priority: number,
    description: string,
  ) => {
    setTasks([
      ...tasks,
      {
        title: taskTitle,
        priority: priority,
        description: description,
      },
    ]);
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Taskcard {...item} />}
        ListEmptyComponent={<Text>No tasks to display</Text>}
      />

      <Taskmodal
        showModal={showModal}
        setShowModal={(visible: boolean) => setShowModal(visible)}
      >
        <Taskform
          addTask={(taskTitle: string, priority: number, description: string) =>
            addTask(taskTitle, priority, description)
          }
        />
      </Taskmodal>
      <CustomButton title={'Add New Task'} onPress={() => setShowModal(true)} />
    </View>
  );
}
