import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEW_MODES } from '../constants/constants';
import { get, set, del } from 'idb-keyval';

const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    console.log(name, 'has been retrieved');
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    console.log(name, 'with value', value, 'has been saved');
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    console.log(name, 'has been deleted');
    await del(name);
  },
};

interface TaskState {
  tasks: Task[];
  selectedTask: Task | undefined;
  isEditMode: boolean;
  viewMode: ViewMode;
  nextTaskId: number;

  setSelectedTask: (task: Task | undefined) => void;
  setEditMode: (isEdit: boolean) => void;
  setViewMode: (mode: ViewMode) => void;
  clearSelection: () => void;
  setTasks: (tasks: Task[]) => void;
}

export const useTaskStore = create<TaskState>()(
  // persist(
  set => ({
    tasks: [],
    selectedTask: undefined,
    isEditMode: false,
    viewMode: VIEW_MODES.NONE,
    nextTaskId: 1,

    setSelectedTask: task => set({ selectedTask: task }),

    setEditMode: isEdit => set({ isEditMode: isEdit }),

    setViewMode: mode => set({ viewMode: mode }),

    clearSelection: () =>
      set({
        selectedTask: undefined,
        isEditMode: false,
      }),

    setTasks: tasks => set({ tasks: tasks }),
  }),
  // {
  //   name: 'task-storage',
  //   storage: createJSONStorage(() => AsyncStorage),
  //   partialize: state => ({
  //     tasks: state.tasks,
  //     nextTaskd: state.nextTaskId,
  //   }),
  // },
  // ),
);
