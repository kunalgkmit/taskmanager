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
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          opacity: 0.5,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      ></View>
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
