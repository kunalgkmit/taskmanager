import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { COLORS } from '../../constants/colors/colors';

interface TaskCardProps {
  task: Task;
  deleteTask: (id: number) => void;
  onUpdatePress: (task: Task) => void;
  onStatusChange: (taskId: number, status: boolean) => void;
}

export default function TaskCard({
  task,
  deleteTask,
  onUpdatePress,
  onStatusChange,
}: TaskCardProps) {
  const checkBoxHandler = (isChecked: boolean) => {
    onStatusChange(task.taskId, isChecked);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <BouncyCheckbox
          style={styles.checkboxStyle}
          onPress={(isChecked: boolean) => {
            checkBoxHandler(isChecked);
          }}
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
            onPress={() => deleteTask(task.taskId)}
          />

          <CustomButton title="UPDATE" onPress={() => onUpdatePress(task)} />
        </View>
      ) : null}
    </View>
  );
}
