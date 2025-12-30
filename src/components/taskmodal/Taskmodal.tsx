import { View, Modal } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { Task } from '../../types/type';

interface AddTaskModalFormProps {
  resetEditStates: () => void;
  showAddTaskFormModal: boolean;
  initialTask?: Task | null;
  setShowAddTaskFormModal: (visible: boolean) => void;
  children: ReactNode;
}

export default function TaskModal({
  showAddTaskFormModal,
  setShowAddTaskFormModal,
  children,
  resetEditStates,
  initialTask,
}: AddTaskModalFormProps) {
  const closeHandler = () => {
    setShowAddTaskFormModal(false);
    if (initialTask) {
      resetEditStates();
    }
  };
  return (
    <Modal transparent={true} visible={showAddTaskFormModal}>
      <View style={styles.modalView}>
        {children}
        <CustomButton title="Close" onPress={closeHandler} />
      </View>
    </Modal>
  );
}
