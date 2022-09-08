import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text } from 'react-native';

import { Controller } from './pages/Controller';
import { NetworkScreen } from './pages/Network';
import { NetworksScreen } from './pages/Networks';

function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Networks')} title="Go to networks" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Networks" component={NetworksScreen} />
    </Drawer.Navigator>
  );
}
const token = null;
export default function App() {
  const [loaded, setLoaded] = useState(false);

  SecureStore.getItemAsync('session').then((session) => {
    setLoaded(true);
  });

  if (loaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {token === null ? (
            <Stack.Screen name="Login" component={Controller} options={{ headerShown: false }} />
          ) : (
            <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
          )}
          <Stack.Screen name="NetworkScreen" component={NetworkScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading</Text>
      </View>
    );
  }
}
