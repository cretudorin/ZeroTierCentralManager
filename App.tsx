import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { Button, View } from 'react-native';
import SettingsScreen from './src/screens/SettingsScreen';
import Constants from 'expo-constants';
import { LocalStorageService } from './src/services/secure-storage';

const localStorage = LocalStorageService.getInstance();

function HomeScreen({ navigation }: DrawerScreenProps<{}>) {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>
            <Button onPress={() => console.log(1)} title="1" />
            <Button onPress={() => console.log(2)} title="2" />
        </View>
    );
}

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

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                {/* <Drawer.Screen name="Settings" component={SettingsScreen} /> */}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}