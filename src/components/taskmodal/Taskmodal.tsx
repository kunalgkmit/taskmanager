import { View, Modal, Text } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import TaskPriorityButton from '../taskPriorityButton/TaskPriorityButton.tsx';

interface Props {
  showAddTaskFormModal: boolean;
  setShowAddTaskFormModal: (visible: boolean) => void;
  children: ReactNode;
  modalName: string;
}

export default function TaskModal({
  showAddTaskFormModal,
  setShowAddTaskFormModal,
  modalName,
  children,
}: Props) {
  return (
    <Modal
      transparent={true}
      visible={showAddTaskFormModal}
      animationType="slide"
    >
      <View style={styles.modalView}>
        <View style={{ alignItems: 'center', flex: 1, marginTop: 17 }}>
          <Text style={styles.modalName}>{modalName}</Text>
          {children}
          <CustomButton
            title="Close"
            onPress={() => setShowAddTaskFormModal(false)}
          />
        </View>
      </View>
    </Modal>
  );
}
