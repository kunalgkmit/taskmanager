export interface Task {
  taskId: number;
  title: string;
  priority: string;
  description: string;
  status: boolean = false;
}
