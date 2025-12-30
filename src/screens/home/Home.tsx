import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import { Task } from '../../types/type';
import NoTasksToDisplay from '../../components/noTasksToDisplay';
import AppBar from '../../components/appBar';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [isEditMode, setIsEditMode] = useState(false);

  const addTask = (task: Task) => {
    setTasks(prev => [
      ...prev,
      { ...task, taskId: prev.length + 1, status: false },
    ]);
  };

  const deleteTask = (idToDelete: number) => {
    const updatedTasks = tasks.filter(item => item.taskId !== idToDelete);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(prev =>
      prev.map(task =>
        task.taskId === updatedTask.taskId ? updatedTask : task,
      ),
    );
    setIsEditMode(false);
    setSelectedTask(undefined);
  };
  const onUpdatePress = (task: Task) => {
    setSelectedTask(task);
    setIsEditMode(true);
  };
  const resetEditMode = () => {
    setIsEditMode(false);
    setSelectedTask(undefined);
  };

  return (
    <View style={styles.container}>
      <AppBar />
      <FlatList
        scrollEnabled={tasks.length > 0}
        showsVerticalScrollIndicator={false}
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            deleteTask={deleteTask}
            onUpdatePress={onUpdatePress}
          />
        )}
        ListEmptyComponent={<NoTasksToDisplay />}
      />

      <AddTaskModalForm
        buttonTitle={'Add New Task'}
        buttonName={isEditMode ? 'Update Task' : 'Add Task'}
        modalName={isEditMode ? 'Update Task' : 'Add Task'}
        initialTask={isEditMode ? selectedTask : undefined}
        onSubmit={isEditMode ? updateTask : addTask}
        resetEditStates={resetEditMode}
      />
    </View>
  );
}
