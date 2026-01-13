import { create } from 'zustand';
import { VIEW_MODES, PRIORITY } from '../constants/constants';

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

export const useTaskStore = create<TaskState>((set, get) => ({
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
}));
