import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { TaskModal } from '../taskModal';
import { TaskForm } from '../taskForm';

interface Task {
  taskId: number;
  title: string;
  priority: string;
  description: string;
}

export default function TaskCard(task: {
  title: string;
  priority: string;
  description: string;
  taskId: number;
  deleteTask: (id: number) => void;
  updateTask: (newTask: Task, idToUpdate: number) => void;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const handleDelete = () => {
    task.deleteTask(task.taskId);
  };
  const handleUpdateButton = () => {
    setIsVisible(true);
  };
  const updatedTask = (newTask: Task) => {
    newTask = { ...newTask, taskId: task.taskId };
    task.updateTask({ ...newTask }, task.taskId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <BouncyCheckbox size={30} onPress={() => {}} fillColor="#88D66C" />
        <View style={styles.textContainer}>
          <Text style={styles.item}>
            {task.title} - {task.priority}
          </Text>
          <Text style={styles.description}>{task.description}</Text>
        </View>
        {isVisible && (
          <TaskModal
            showAddTaskFormModal={isVisible}
            setShowAddTaskFormModal={setIsVisible}
          >
            <TaskForm
              addTask={updatedTask}
              setShowAddTaskFormModal={setIsVisible}
              buttonName="Update Task"
            />
          </TaskModal>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="UPDATE" onPress={handleUpdateButton} />
        <CustomButton title="DELETE" onPress={handleDelete} />
      </View>
    </View>
  );
}
