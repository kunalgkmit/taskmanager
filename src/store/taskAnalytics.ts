import { create } from 'zustand';
import { useTaskStore } from './taskStore';

type TasksAnalytics = {
  totalTasks: number;
  completedTasks: number;
  incompleteTasks: number;
  updateTaskAnalytics: () => void;
};

export const useTasksAnalyticsStore = create<TasksAnalytics>(set => ({
  totalTasks: 0,
  completedTasks: 0,
  incompleteTasks: 0,

  updateTaskAnalytics: () => {
    const tasks = useTaskStore.getState().tasks;
    const complete = tasks.filter(task => task.status === true).length;
    const incomplete = tasks.filter(task => task.status === false).length;
    set({
      totalTasks: tasks.length,
      completedTasks: complete,
      incompleteTasks: incomplete,
    });
  },
}));
