import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

import { CONTROLLER, TOKEN } from '../secrets';

const Separator = () => (
  <View
    style={{
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: 2,
    }}
  />
);
export function Controller({ navigation }: any) {
  const [controller, setController] = useState<string>(CONTROLLER);
  const [token, setToken] = useState<string>(TOKEN);

  const checkCredentials = async () => {
    return await fetch(`${controller}/api/v1/network`, {
      method: 'GET',
      mode: 'no-cors',
      credentials: 'include',
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then(() => true)
      .catch((err) => {
        console.log(err.message);
        Alert.alert('Bad credentials');
      });
  };

  const handleSubmit = () => {
    checkCredentials().then((value) => {
      if (value) {
        debugger;
        navigation.navigate('Networks');
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Controller</Text>
      <TextInput
        style={styles.input}
        value={controller}
        onChangeText={(text) => setController(text)}
      />

      <Text>Token</Text>
      <TextInput style={styles.input} value={token} onChangeText={(text) => setToken(text)} />
      <Separator />
      <Button title="Save" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
