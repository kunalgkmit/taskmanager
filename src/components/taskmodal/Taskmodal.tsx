import { View, Modal } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button/index.ts';

interface Props {
  showAddTaskFormModal: boolean;
  setShowAddTaskFormModal: (visible: boolean) => void;
  children: ReactNode;
}

export default function TaskModal({
  showAddTaskFormModal,
  setShowAddTaskFormModal,
  children,
}: Props) {
  return (
    <Modal transparent={true} visible={showAddTaskFormModal}>
      <View style={styles.modalView}>
        {children}
        <CustomButton
          title="Close"
          onPress={() => setShowAddTaskFormModal(false)}
        />
      </View>
    </Modal>
  );
}
