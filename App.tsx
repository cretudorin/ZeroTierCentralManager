import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { Login } from './pages/Login';
import { NetworkScreen } from './pages/Network';
import { NetworksScreen } from './pages/Networks';

const Drawer = createDrawerNavigator();

function DrawerRoot({ route }: any) {
  const session = route.params.session;
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Networks" component={NetworksScreen} initialParams={{ session }} />
      <Drawer.Screen name="NetworkScreen" component={NetworkScreen} />
    </Drawer.Navigator>
  );
}
export default function App() {
  const [session, setSession] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log(1);
    SecureStore.getItemAsync('session').then((session) => {
      if (session) {
        try {
          setSession(JSON.parse(session));
        } catch (error) {
          console.log(error);
        }
      }
      setLoaded(true);
    });
  }, []);

  if (loaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          {session === null ? (
            <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
          ) : (
            <Drawer.Screen
              name="DrawerRoot"
              component={DrawerRoot}
              options={{ headerShown: false }}
              initialParams={{ session }}
            />
          )}
        </Drawer.Navigator>
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
