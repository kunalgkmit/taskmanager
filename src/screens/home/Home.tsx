import React, { useMemo, useRef, useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import EmptyContainer from '../../components/emptyContainer';
import AppBar from '../../components/appBar';
import { VIEW_MODES, PRIORITY } from '../../constants/constants.ts';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | undefined>(undefined);
  const [isEditMode, setIsEditMode] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>(VIEW_MODES.NONE);
  const taskIdRef = useRef(1);

  const addTask = (task: Task) => {
    setTasks(prev => [
      ...prev,
      { ...task, taskId: taskIdRef.current, status: false },
    ]);
    taskIdRef.current += 1;
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

  const displayTasks = useMemo(() => {
    let modifyTasks = [...tasks];

    if (viewMode === VIEW_MODES.FILTER) {
      modifyTasks = modifyTasks.filter(task => task.priority === PRIORITY.HIGH);
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
  }, [tasks, viewMode]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppBar
        viewMode={viewMode}
        filterPress={toggleFilterButton}
        sortPress={toggleSortButton}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayTasks}
        keyExtractor={item => item.taskId.toString()}
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
