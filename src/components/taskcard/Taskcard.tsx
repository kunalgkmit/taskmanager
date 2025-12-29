import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import AddTaskModalForm from '../addTaskModalForm';

type Task = {
  taskId: number;
  title: string;
  priority: string;
  description: string;
};

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
  updateTask: (task: Task) => void;
}

export default function TaskCard({ task, deleteTask, updateTask }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox onPress={() => {}} />
      <Text style={styles.item}>
        {task.title} - {task.priority}
      </Text>

      <AddTaskModalForm
        buttonTitle="Update"
        buttonName="Update Task"
        initialTask={task}
        onSubmit={updateTask}
      />

      <CustomButton title="DELETE" onPress={() => deleteTask(task.taskId)} />
    </View>
  );
}
