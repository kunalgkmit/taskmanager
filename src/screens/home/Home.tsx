import React, { useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import { Task } from '../../types/type';
import EmptyContainer from '../../components/emptyContainer';
import AppBar from '../../components/appBar';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [isEditMode, setIsEditMode] = useState(false);
  const [filterMode, setFilterMode] = useState(false);

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

  const onSubmit = (newTask: Task) => {
    isEditMode ? updateTask(newTask) : addTask(newTask);
  };

  const onStatusChange = (taskId: number, status: boolean) => {
    setTasks(prev =>
      prev.map(task => (task.taskId === taskId ? { ...task, status } : task)),
    );
  };

  const toggleFilterButton = () => {
    setFilterMode(!filterMode);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (a.status !== b.status) {
      return b.status ? -1 : 1;
    } else if (a.status === b.status) {
      if (a.priority < b.priority) {
        return -1;
      }
      if (a.priority > b.priority) {
        return 1;
      }
    }
    return 0;
  });

  return (
    <View style={styles.container}>
      <AppBar filterMode={filterMode} filterPress={toggleFilterButton} />
      <StatusBar barStyle={'light-content'} />
      <FlatList
        scrollEnabled={tasks.length > 0}
        showsVerticalScrollIndicator={false}
        data={filterMode ? sortedTasks : tasks}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            deleteTask={deleteTask}
            onUpdatePress={onUpdatePress}
            onStatusChange={onStatusChange}
          />
        )}
        ListEmptyComponent={<EmptyContainer />}
      />

      <AddTaskModalForm
        isEditMode={isEditMode}
        initialTask={selectedTask}
        onSubmit={onSubmit}
        resetEditStates={resetEditMode}
      />
    </View>
  );
}
