import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import { Task } from '../../types/type';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, { ...task, taskId: prev.length + 1 }]);
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
    setSelectedTask(null);
  };
  const onUpdatePress = (task: Task) => {
    setSelectedTask(task);
    setIsEditMode(true);
  };
  const resetEditMode = () => {
    setIsEditMode(false);
    setSelectedTask(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            deleteTask={deleteTask}
            onUpdatePress={onUpdatePress}
          />
        )}
        ListEmptyComponent={<Text>No tasks to display</Text>}
      />

      <AddTaskModalForm
        buttonTitle={'Add New Task'}
        buttonName={isEditMode ? 'Update Task' : 'Add Task'}
        initialTask={isEditMode ? selectedTask : null}
        onSubmit={isEditMode ? updateTask : addTask}
        resetEditStates={resetEditMode}
      />
    </View>
  );
}
