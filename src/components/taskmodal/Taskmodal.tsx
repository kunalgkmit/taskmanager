import { View, Modal } from 'react-native';
import React, { ReactNode } from 'react';
import { styles } from './styles.ts';
import CustomButton from '../button/Button.tsx';

interface Props {
  showModal: boolean;
  setShowModal: (visible: boolean) => void;
  children: ReactNode;
}

export default function Taskmodal({
  showModal,
  setShowModal,
  children,
}: Props) {
  return (
    <Modal transparent={true} visible={showModal}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalView}>
          {children}
          <CustomButton title="Close" onPress={() => setShowModal(false)} />
        </View>
      </View>
    </Modal>
  );
}
