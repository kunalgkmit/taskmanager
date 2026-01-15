import { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import AppBar from '../../components/appBar';
import { useTaskStore } from '../../store/taskStore';
import { styles } from './styles';
import { useTasksAnalyticsStore } from '../../store/taskAnalytics';
import { ROUTES } from '../../constants/routes';
import { useAuthStore } from '../../store/authStore';

export default function ProfileScreen() {
  // const updateAuth = useAuthStore(state => state.updateAuth);

  const route = useRoute<RouteProp<BottomTabNavTypes>>();
  const navigation = useNavigation<AuthStackProp>();

  // const totalTasks = useTasksAnalyticsStore(state => state.totalTasks);
  // const completedTasks = useTasksAnalyticsStore(state => state.completedTasks);
  // const incompleteTasks = useTasksAnalyticsStore(
  //   state => state.incompleteTasks,
  // );
  // const updateTaskAnalytics = useTasksAnalyticsStore(
  //   state => state.updateTaskAnalytics,
  // );

  // const tasks = useTaskStore(state => state.tasks);

  // useEffect(() => {
  //   console.log('TASKS WAS CHANGED>>>>>');
  //   updateTaskAnalytics();
  // }, [tasks]);

  // console.log('TOTAL TASKS>>>>>>', totalTasks);

  const logoutHandle = () => {
    useAuthStore.setState({
      isAuth: false,
    });
  };

  return (
    <View>
      <AppBar title="Profile" showDrawer={true} />
      <View style={styles.container}>
        {/* <Text>This is PROFILE SECTION!</Text>
        <Text>TOTAL TASKS: {totalTasks}</Text>
        <Text>COMPLETED TASKS: {completedTasks}</Text>
        <Text>INCOMPLETED TASKS: {incompleteTasks}</Text> */}

        <Button title="LOGOUT" onPress={logoutHandle} />
      </View>
    </View>
  );
}
