import { View } from 'react-native';
import React, { useState } from 'react';
import { TaskModal } from '../taskModal';
import { Button as CustomButton } from '../button';
import { TaskForm } from '../taskForm';

interface Props {
  addTask: (task: {
    title: string;
    priority: number;
    description: string;
  }) => void;
}

export default function ModalForm({ addTask }: Props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <TaskModal showModal={showModal} setShowModal={setShowModal}>
        <TaskForm addTask={addTask} setShowModal={setShowModal} />
      </TaskModal>
      <CustomButton title={'Add New Task'} onPress={() => setShowModal(true)} />
    </View>
  );
}
