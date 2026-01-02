declare global {
  interface Task {
    taskId: number;
    title: string;
    priority: string;
    description: string;
    status: boolean = false;
  }

  type ViewMode = 'none' | 'filter' | 'sort';
}

export {};
