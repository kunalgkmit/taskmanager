import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
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
        <View style={styles.checkBoxWrapper}>
          <BouncyCheckbox
            size={30}
            onPress={() => {}}
            fillColor="#88D66C"
            iconStyle={styles.checkBoxIcon}
            innerIconStyle={styles.checkBoxInner}
          />
          <Text style={styles.priority}>{task.priority}</Text>
        </View>
        <View style={styles.textContainer}>
          <ScrollView>
            <Text style={styles.item} numberOfLines={2}>
              {task.title}
            </Text>
            <Text style={styles.description}>{task.description}</Text>
          </ScrollView>
        </View>

        {isVisible && (
          <TaskModal
            showAddTaskFormModal={isVisible}
            setShowAddTaskFormModal={setIsVisible}
            modalName="Update Task"
          >
            <TaskForm
              addTask={updatedTask}
              setShowAddTaskFormModal={setIsVisible}
              buttonName="Update Task"
              titleToUpdate={task.title}
              descriptionToUpdate={task.description}
              priorityToUpdate={task.priority}
            />
          </TaskModal>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton title="DELETE" onPress={handleDelete} />
        <CustomButton title="UPDATE" onPress={handleUpdateButton} />
      </View>
    </View>
  );
}
