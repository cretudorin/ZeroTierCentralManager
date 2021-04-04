import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ErrorScreen from './src/screens/ErrorScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import NetworksListScreen from './src/screens/NetworksList';
import SettingsScreen from './src/screens/SettingsScreen';
import { SplashScreen } from './src/screens/SplashScreen';
import { LocalStorageService } from './src/services/secure-storage';

const localStorage = LocalStorageService.getInstance();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
    const servers = [
        <DrawerItem key="1" label="1" onPress={() => alert(1)} />,
        <DrawerItem key="2" label="2" onPress={() => alert(2)} />,
        <DrawerItem key="3" label="3" onPress={() => alert(2)} />,
    ]
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            {servers}
            <DrawerItem label="Help" onPress={() => alert('Link to help')} />
        </DrawerContentScrollView>
    );
}

export default function App() {
    debugger
    localStorage
        .getJson('API_TOKEN')
        .then(
            (apiToken) => {
                debugger
                // navigation.navigate('NetworksList')
            },
            (error) => {
                debugger
                // navigation.navigate('Error')
            }
        )

    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                initialRouteName="Splash"
            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
                <Drawer.Screen name="NetworksList" component={NetworksListScreen} />
                <Drawer.Screen name="Splash" component={SplashScreen}></Drawer.Screen>
                <Drawer.Screen name="Error" component={ErrorScreen}></Drawer.Screen>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

