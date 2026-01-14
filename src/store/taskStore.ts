import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VIEW_MODES } from '../constants/constants';

interface TaskState {
  tasks: Task[];
  selectedTask: Task | undefined;
  isEditMode: boolean;
  viewMode: ViewMode;

  setSelectedTask: (task: Task | undefined) => void;
  setEditMode: (isEdit: boolean) => void;
  setViewMode: (mode: ViewMode) => void;
  clearSelection: () => void;
  setTasks: (tasks: Task[]) => void;
}

export const useTaskStore = create<TaskState>()(
  persist(
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
    {
      name: 'task-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([item]) =>
              ![
                'viewMode',
                'selectedTask',
                'isEditMode',
                'setSelectedTask',
                'setEditMode',
                'setViewMode',
                'clearSelection',
                'setTasks',
              ].includes(item),
          ),
        ),
    },
  ),
);
