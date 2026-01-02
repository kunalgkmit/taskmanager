import React, { useRef, useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import EmptyContainer from '../../components/emptyContainer';
import AppBar from '../../components/appBar';
import { VIEW_MODES } from '../../constants/viewModes/viewModes.ts';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [isEditMode, setIsEditMode] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(VIEW_MODES.NONE);

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

  const toggleSortButton = () => {
    setViewMode(
      viewMode === VIEW_MODES.SORT ? VIEW_MODES.NONE : VIEW_MODES.SORT,
    );
  };

  const toggleFilterButton = () => {
    setViewMode(
      viewMode === VIEW_MODES.FILTER ? VIEW_MODES.NONE : VIEW_MODES.FILTER,
    );
  };

  const getDisplayTasks = () => {
    let modifyTasks = [...tasks];

    if (viewMode === VIEW_MODES.FILTER) {
      modifyTasks = modifyTasks.filter(
        task => task.priority === VIEW_MODES.HIGHEST_PRIORITY,
      );
    }

    if (viewMode === VIEW_MODES.SORT) {
      modifyTasks = modifyTasks.sort((a, b) => {
        if (a.status !== b.status) {
          return b.status ? -1 : 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        if (a.priority > b.priority) {
          return 1;
        }
        return 0;
      });
    }

    return modifyTasks;
  };

  const displayTasks = getDisplayTasks();

  return (
    <View style={styles.container}>
      <AppBar
        viewMode={viewMode}
        filterPress={toggleFilterButton}
        sortPress={toggleSortButton}
      />
      <StatusBar barStyle={'light-content'} />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayTasks}
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
