import React, { useState } from 'react';
import { View, Text } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { styles } from './styles.ts';
import { Button as CustomButton } from '../button';
import { Task } from '../../types/type';

interface HomeProps {
  task: Task;
  deleteTask: (id: number) => void;
  onUpdatePress: (task: Task) => void;
}

export default function TaskCard({
  task,
  deleteTask,
  onUpdatePress,
}: HomeProps) {
  return (
    <View style={styles.container}>
      <View style={styles.rowContent}>
        <BouncyCheckbox
          style={{ marginBottom: 33 }}
          onPress={(isChecked: boolean) => {
            task.status = isChecked;
          }}
          fillColor="#78787bff"
          unFillColor="white"
          iconStyle={styles.checkBoxIcon}
          innerIconStyle={styles.checkBoxInner}
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

      <View style={styles.buttonContainer}>
        <CustomButton title="DELETE" onPress={() => deleteTask(task.taskId)} />

        <CustomButton title="UPDATE" onPress={() => onUpdatePress(task)} />
      </View>
    </View>
  );
}
