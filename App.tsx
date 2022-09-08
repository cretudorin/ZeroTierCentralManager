import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, TouchableOpacity, View } from 'react-native';

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Stack.Screen
          options={{ title: 'NetworkScreen' }}
          name="NetworkScreen"
          component={NetworkScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
