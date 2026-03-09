import { View, Modal, Text, Image, TouchableOpacity } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';

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
      <View style={styles.blurBackground}></View>
      <View style={styles.modalView}>
        <TouchableOpacity onPress={closeHandler} style={styles.close}>
          <Image
            style={styles.image}
            source={require('../../assets/images/close.png')}
          />
        </TouchableOpacity>
        <Text style={styles.modalName}>{modalName}</Text>
        {children}
      </View>
    </Modal>
  );
}
