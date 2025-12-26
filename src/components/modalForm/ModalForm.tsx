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
      <TaskModal
        showModal={showModal}
        setShowModal={(visible: boolean) => setShowModal(visible)}
      >
        <TaskForm
          addTask={addTask}
          showModal={showModal}
          setShowModal={(visible: boolean) => setShowModal(visible)}
        />
      </TaskModal>
      <CustomButton title={'Add New Task'} onPress={() => setShowModal(true)} />
    </View>
  );
}
