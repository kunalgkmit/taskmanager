import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button/index.ts';
import TaskModal from '../taskModal/Taskmodal.tsx';
import TaskForm from '../taskForm/Taskform.tsx';

interface Task {
  title: string;
  priority: number;
  description: string;
}

export default function TaskCard(task: {
  title: string;
  priority: number;
  description: string;
  index: number;
  deleteTask: (id: number) => void;
  updateTask: (newTask: Task, id: number) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const handleDelete = () => {
    task.deleteTask(task.index);
  };
  const handleUpdateButton = () => {
    setIsVisible(true);
  };
  const getNewTask = (newTask: Task) => {
    task.updateTask({ ...newTask }, task.index);
  };

  return (
    <View style={styles.container}>
      <BouncyCheckbox size={20} onPress={() => {}} />
      <Text style={styles.item}>
        {task.title} - {task.priority}
      </Text>
      <CustomButton title="UPDATE" onPress={handleUpdateButton} />
      <CustomButton title="DELETE" onPress={handleDelete} />
      {isVisible && (
        <TaskModal
          showAddTaskFormModal={isVisible}
          setShowAddTaskFormModal={setIsVisible}
        >
          <TaskForm
            addTask={(newTask: Task) => getNewTask(newTask)}
            setShowAddTaskFormModal={setIsVisible}
          />
        </TaskModal>
      )}
    </View>
  );
}
