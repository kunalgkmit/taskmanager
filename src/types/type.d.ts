interface Task {
  taskId: number;
  title: string;
  priority: string;
  description: string;
  status: boolean;
}
type ViewMode = 'none' | 'filter' | 'sort';
