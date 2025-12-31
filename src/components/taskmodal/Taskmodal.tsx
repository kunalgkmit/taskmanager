import { View, Modal, Text, Image, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';
import { Task } from '../../types/type';

interface AddTaskModalFormProps {
  resetEditStates: () => void;
  showAddTaskFormModal: boolean;
  initialTask?: Task;
  setShowAddTaskFormModal: (visible: boolean) => void;
  children: ReactNode;
  modalName: string;
}

export default function TaskModal({
  showAddTaskFormModal,
  setShowAddTaskFormModal,
  children,
  resetEditStates,
  initialTask,
  modalName,
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
        <View style={styles.rowContent}>
          <Text style={styles.modalName}>{modalName}</Text>
          <TouchableOpacity onPress={closeHandler}>
            <Image
              style={styles.close}
              source={require('../../assets/images/close.png')}
            />
          </TouchableOpacity>
        </View>
        {children}
      </View>
    </Modal>
  );
}
