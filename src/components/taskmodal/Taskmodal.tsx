import { View, Modal } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button/index.ts';

interface Props {
  showModal: boolean;
  setShowModal: (visible: boolean) => void;
  children: ReactNode;
}

export default function TaskModal({
  showModal,
  setShowModal,
  children,
}: Props) {
  return (
    <Modal transparent={true} visible={showModal}>
      <View style={styles.modalView}>
        {children}
        <CustomButton title="Close" onPress={() => setShowModal(false)} />
      </View>
    </Modal>
  );
}
