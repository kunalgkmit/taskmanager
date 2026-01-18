import React from 'react';
import { View, Text, Button } from 'react-native';
import AppBar from '../../components/appBar';
import { useTaskStore } from '../../store/taskStore';
import { BASE_URL } from '../../network/URLs';

const fetchData = () => {
  const check = fetch(BASE_URL)
    .then(res => {
      console.log('1st .then()', res);
      return res.json();
    })
    .then(data => {
      console.log('2nd .then()', data);
      return 199;
    })
    .catch(err => {
      console.log('CATCH SCOPE: Error caught', err);
      return null;
    })
    .finally(() => console.log('finally fetch done'));

  return check;
};
async function checkFun() {
  const result = await fetchData();
  console.log('THEN SCOPE>>>>>', result);
}
checkFun();

const postData = async (tasks: Task[]) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(tasks),
    headers: {
      'Content-type': 'application/json',
    },
  });
  const resJSON = await response.json();
  console.log('POSTED DATA>>>>>', resJSON);
};

const putData = async (id: number) => {
  const sampleData = {
    id: '1',
    title: 'foo',
    body: 'bar',
    userId: '1',
  };
  const queryString = new URLSearchParams(sampleData).toString();
  try {
    const response = await fetch(`${BASE_URL}?${queryString}`, {
      method: 'PUT',
      body: JSON.stringify(sampleData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      throw 'GOING INTO CATCH :-)';
    }
    const resJSON = await response.json();
    console.log('PUT DATA>>>>>', resJSON);
  } catch (error) {
    console.log('ERROR in FETCH>>>>>>', error);
  }
};

const patchData = () => {
  const response = fetch(`${BASE_URL}/`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => {
      if (!res.ok) {
        throw 'PATCH got into error';
      }
      console.log('PATCH RESPONSE>>>>', res);
    })
    .catch(error => console.log('PATCH ERROR>>>>', error))
    .finally(() => console.log('PATCH COMPLETE>>>>>'));
};

const deleteData = async () => {
  const response = await fetch(`${BASE_URL}/1`, {
    method: 'DELETE',
  });
  console.log('DELETE DATA>>>>>', response);
};

export default function AboutScreen() {
  const tasks = useTaskStore(state => state.tasks);

  return (
    <View>
      <AppBar title="About" showDrawer={false} />
      <Text>About Content Here</Text>
      <Button title="FETCH DATA" onPress={fetchData} />
      <Button title="POST DATA" onPress={() => postData(tasks)} />
      <Button title="PUT DATA" onPress={() => putData(1)} />
      <Button title="PATCH DATA" onPress={patchData} />
      <Button title="DELETE DATA" onPress={deleteData} />
    </View>
  );
}
