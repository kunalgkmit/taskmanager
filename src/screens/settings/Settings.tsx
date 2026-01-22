import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import AppBar from '../../components/appBar';
import { useTaskStore } from '../../store/taskStore';
import { BASE_URL } from '../../network/URLs.ts';
import {
  QueryFunctionContext,
  QueryKey,
  queryOptions,
  useQueries,
  useQuery,
} from '@tanstack/react-query';
import {
  Asset,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';

const axiosInstance = axios.create({ baseURL: BASE_URL });

const formData = new FormData();

const fetchAxios = async (id: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    console.log('FETCHED>>>>', response.data);

    return response.data;
  } catch (error) {
    console.log('AXIOS Fetch error>>>>>:', error);
  }
};

// const postAxios = async (tasks: Task[]) => {
//   const response = await axios.post(BASE_URL, tasks).catch(err => {
//     if (err.response) {
//       // client received an error response (5xx, 4xx)
//       console.log('if catch', err.message);
//     } else if (err.request) {
//       // client never received a response, or request never left
//       console.log('else if catch');
//     } else {
//       // anything else
//       console.log('else catch');
//     }
//   });
//   // console.log(response.data);
// };

// const postAxiosTryCatch = async (tasks: Task[]) => {
//   try {
//     const response = await axios.post(BASE_URL, tasks);
//     console.log(response);
//   } catch (error) {
//     if (error) {
//       // client received an error response (5xx, 4xx)
//       console.log('if catch', error.response.status);
//     } else if (error.request) {
//       // client never received a response, or request never left
//       console.log('else if catch');
//     } else {
//       // anything else
//       console.log('else catch');
//     }
//   }
// };

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
    console.log('ERROR in catch>>>>', error);
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

const pickImageFromGallery = () => {
  const options = {
    mediaType: 'photo' as const,
    quality: 1 as const,
    maxWidth: 1024,
    maxHeight: 1024,
  };

  launchImageLibrary(options, (response: ImagePickerResponse) => {
    if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
      console.log('Error', response.errorMessage || 'Something went wrong');
      return;
    }

    if (response.assets && response.assets.length > 0) {
      const image = response.assets[0];

      console.log('IMAGE PROPERTIES:');
      console.log('image', image);
      const sampleName = 'Running';

      formData.append('image', image);
      formData.append('sampleData', sampleName);
      console.log('FORM DATA>>>', formData);
    }
  });
};

const postAxios = async () => {
  const response = await axios.post(BASE_URL, { data: formData });
  try {
    console.log('POST RESPONSE>>', response.data.data._parts);
  } catch (err) {
    if (err) {
      // client received an error response (5xx, 4xx)
      console.log('if catch', err.message);
    } else if (err.request) {
      // client never received a response, or request never left
      console.log('else if catch');
    } else {
      // anything else
      console.log('else catch');
    }
  }
};

// queryOptions
export const getFirstOptions = (id: number) =>
  queryOptions({
    queryKey: ['getFirst', id],
    queryFn: () => fetchAxios(id),
    enabled: false,
  });

const dataIds = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function SettingsScreen() {
  const tasks = useTaskStore(state => state.tasks);

  const {
    data,
    isPending,
    isLoading,
    isError,
    refetch,
    fetchStatus,
    status,
    error,
  } = useQuery(getFirstOptions(1));
  console.log('useQuery Data>>>>>>', data);
  console.log('useQuery isPending>>>>>>', isPending);
  console.log('useQuery isLoading>>>>>>', isLoading);
  console.log('useQuery isError>>>>>>', isError);
  console.log('useQuery fetchStatus>>>>>>', fetchStatus);
  console.log('useQuery status>>>>>>', status);
  console.log('useQuery error>>>>>>', error);

  const useQueriesIdData = useQueries({
    queries: dataIds.map(data => ({
      queryKey: ['data' + data.id],
      queryFn: () => fetchAxios(data.id),
    })),
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <AppBar title="Settings" showDrawer={false} />
      <Text>Settings Content Here</Text>
      <Button title="AXIOS GET" onPress={() => refetch()} />
      <Button title="AXIOS POST" onPress={postAxios} />
      <Button title="AXIOS PUT" onPress={() => putAxios(1)} />
      <Button title="AXIOS PATCH" onPress={() => patchAxios(1)} />
      <Button title="AXIOS DELETE" onPress={() => deleteAxios(1)} />
      <Button title="Take Photo" onPress={pickImageFromGallery} />
      {/* <FlatList
        data={useQueriesIdData}
        renderItem={({ item }) => <Text>{item.data.title}</Text>}
      /> */}
    </View>
  );
}
