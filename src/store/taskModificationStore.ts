import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTaskStore } from './taskStore';

type TaskModificationState = {
  nextTaskId: number;
  addTask: (task: Omit<Task, 'taskId' | 'status'>) => void;
  deleteTask: (taskId: number) => void;
  updateTask: (task: Task) => void;
  toggleTaskStatus: (taskId: number) => void;
  openEditModal: (task: Task) => void;
};

export const useTaskModifyStore = create<TaskModificationState>()(
  persist(
    (set, get) => ({
      nextTaskId: 1,
      addTask: task => {
        const tasks = useTaskStore.getState().tasks;
        const newTask: Task = {
          ...task,
          taskId: get().nextTaskId,
          status: false,
        };
        useTaskStore.setState({
          tasks: [...tasks, newTask],
        });
        set(state => ({ nextTaskId: state.nextTaskId + 1 }));
      },

      deleteTask: taskId => {
        const tasks = useTaskStore.getState().tasks;
        const updatedTasks = tasks.filter(task => task.taskId !== taskId);
        useTaskStore.setState({
          tasks: updatedTasks,
        });
      },

      updateTask: updatedTask => {
        const tasks = useTaskStore.getState().tasks;
        const updatedTasks = tasks.map(task =>
          task.taskId === updatedTask.taskId ? updatedTask : task,
        );
        useTaskStore.setState({
          tasks: updatedTasks,
        });
        useTaskStore.getState().setEditMode(false);
        useTaskStore.getState().setSelectedTask(undefined);
      },

      toggleTaskStatus: taskId => {
        const tasks = useTaskStore.getState().tasks;
        const updatedTasks = tasks.map(task =>
          task.taskId === taskId ? { ...task, status: !task.status } : task,
        );
        useTaskStore.setState({
          tasks: updatedTasks,
        });
      },

      openEditModal: task => {
        useTaskStore.getState().setEditMode(true);
        useTaskStore.getState().setSelectedTask(task);
      },
    }),
    {
      name: 'task-modification',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state => ({
        nextTaskId: state.nextTaskId,
      }),
    },
  ),
);
