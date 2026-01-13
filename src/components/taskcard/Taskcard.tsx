import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { ROUTES } from '../../constants/routes';
import { COLORS } from '../../constants/colors.ts';
import { useTaskModifyStore } from '../../store/taskModificationStore.ts';

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const navigation = useNavigation<StackNavProp>();

  // const deleteTask = useTaskStore(state => state.deleteTask);
  const deleteTask = useTaskModifyStore(state => state.deleteTask);
  const toggleTaskStatus = useTaskModifyStore(state => state.toggleTaskStatus);
  // const openEditModal = useTaskStore(state => state.openEditModal);
  const openEditModal = useTaskModifyStore(state => state.openEditModal);

  console.log('TASK>>>>>>>>CARD');

  const handleDelete = () => {
    deleteTask(task.taskId);
  };

  const handleUpdate = () => {
    openEditModal(task);
  };

  const handleStatusChange = () => {
    toggleTaskStatus(task.taskId);
  };

  const handleTaskPress = () => {
    navigation.navigate(ROUTES.STACK.TASK_DETAILS, { task });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handleTaskPress}
    >
      <View style={styles.rowContent}>
        <BouncyCheckbox
          style={styles.checkboxStyle}
          onPress={handleStatusChange}
          fillColor={COLORS.checkBoxFillColor}
          unFillColor={COLORS.secondary}
          iconStyle={styles.checkBoxIcon}
          innerIconStyle={styles.checkBoxInner}
          isChecked={task.status}
        />
        <View style={styles.textContent}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {task.title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {task.description}
          </Text>
        </View>
        <Text style={styles.priority}>{task.priority}</Text>
      </View>

      {!task.status ? (
        <View style={styles.buttonContainer}>
          <CustomButton
            title="DELETE"
            onPress={handleDelete}
            modifyTask={false}
          />

          <CustomButton
            title="UPDATE"
            onPress={handleUpdate}
            modifyTask={true}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
