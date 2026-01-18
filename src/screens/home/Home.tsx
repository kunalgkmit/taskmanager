import React, { useMemo, useState } from 'react';
import {
  View,
  FlatList,
  StatusBar,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import { useTaskStore } from '../../store/taskStore';
import { styles } from './styles.ts';
import { TaskCard } from '../../components/taskCard';
import AddTaskModalForm from '../../components/addTaskModalForm';
import EmptyContainer from '../../components/emptyContainer';
import { PRIORITY, VIEW_MODES } from '../../constants/constants.ts';
import { useFocusEffect } from '@react-navigation/native';
import { useTaskModifyStore } from '../../store/taskModificationStore.ts';
import AppBar from '@components/appBar/index.ts';

export default function Home() {
  const [exitApp, setExitApp] = useState(false);

  const tasks = useTaskStore(state => state.tasks);
  const viewMode = useTaskStore(state => state.viewMode);
  const setViewMode = useTaskStore(state => state.setViewMode);
  const nextTaskId = useTaskModifyStore(state => state.nextTaskId);
  console.log('TASK ARRAY>>>>>>>>', tasks);
  console.log('NEXT TASK ID>>>>>>>>', nextTaskId);

  useFocusEffect(() => {
    const doubleTapExit = () => {
      if (exitApp) {
        BackHandler.exitApp();
        return true;
      } else {
        ToastAndroid.show('Again Press back to exit', ToastAndroid.SHORT);
        setExitApp(true);
        setTimeout(() => setExitApp(false), 2000);
        return true;
      }
    };

    const backHandle = BackHandler.addEventListener(
      'hardwareBackPress',
      doubleTapExit,
    );

    return () => {
      backHandle.remove();
    };
  });

  const toggleSortButton = () => {
    setViewMode(
      viewMode === VIEW_MODES.SORT ? VIEW_MODES.NONE : VIEW_MODES.SORT,
    );
  };

  const toggleFilterButton = () => {
    setViewMode(
      viewMode === VIEW_MODES.FILTER ? VIEW_MODES.NONE : VIEW_MODES.FILTER,
    );
  };

  const displayTasks = useMemo(() => {
    let modifyTasks = [...tasks];

    if (viewMode === VIEW_MODES.FILTER) {
      modifyTasks = modifyTasks.filter(task => task.priority === PRIORITY.HIGH);
    }

    if (viewMode === VIEW_MODES.SORT) {
      modifyTasks = modifyTasks.sort((a, b) => {
        if (a.status !== b.status) {
          return b.status ? -1 : 1;
        }
        if (a.priority < b.priority) {
          return -1;
        }
        if (a.priority > b.priority) {
          return 1;
        }
        return 0;
      });
    }

    return modifyTasks;
  }, [tasks, viewMode]);

  // function f1() {
  //   return 1;
  //   function f2() {
  //     return 2;
  //   }
  //   function f3() {
  //     return 3;
  //   }
  // }
  // console.log(f1());

  try {
    // run time error
    const result = x * 2;
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppBar
        viewMode={viewMode}
        filterPress={toggleFilterButton}
        sortPress={toggleSortButton}
        title="Tasks"
        showDrawer={true}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayTasks}
        keyExtractor={item => item.taskId.toString()}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListEmptyComponent={<EmptyContainer />}
      />

      <AddTaskModalForm />
    </View>
  );
}
