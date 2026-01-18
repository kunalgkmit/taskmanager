import React, { useEffect } from 'react';
import axios from 'axios';
import { View, Text, Button } from 'react-native';
import AppBar from '../../components/appBar';
import { useTaskStore } from '../../store/taskStore';
import { BASE_URL } from '../../network/URLs.ts';

const axiosInstance = axios.create({ baseURL: BASE_URL });

const fetchAxios = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log('FETCHED>>>>', response.data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

const postAxios = async (tasks: Task[]) => {
  const response = await axios.post(BASE_URL, tasks);
  console.log(response.data);
};

const putAxios = async (id: number) => {
  const sampleData = {
    id: '1',
    title: 'foo',
    body: 'bar',
    userId: '1',
  };
  const queryString = new URLSearchParams(sampleData).toString();
  try {
    const response = await axiosInstance.put(
      `${BASE_URL}?${queryString}`,
      sampleData,
    );
    console.log(response.data);
  } catch (error) {
    console.log('ERROR OCCURRED>>>>', error);
  }
};

const patchAxios = async (id: number) => {
  const response = await axios.patch(`${BASE_URL}/${id}`, {
    title: 'New task',
    body: 'NEW TASK UPDATED BODY',
  });
  console.log(response.data);
};

const deleteAxios = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  console.log(response);
};

export default function SettingsScreen() {
  const tasks = useTaskStore(state => state.tasks);
  return (
    <View>
      <AppBar title="Settings" showDrawer={false} />
      <Text>Settings Content Here</Text>
      <Button title="AXIOS GET" onPress={fetchAxios} />
      <Button title="AXIOS POST" onPress={() => postAxios(tasks)} />
      <Button title="AXIOS PUT" onPress={() => putAxios(1)} />
      <Button title="AXIOS PATCH" onPress={() => patchAxios(1)} />
      <Button title="AXIOS DELETE" onPress={() => deleteAxios(1)} />
    </View>
  );
}
