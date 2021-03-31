import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, View } from 'react-native';
import { CommunicationService } from './src/communication.service';


const communicationService = CommunicationService.getInstance();

function login() {
    communicationService.login('admin', 'adminadmin').then(
        (result) => {
            debugger
            console.log(JSON.stringify(result))
        },
        (error) => {
            debugger
            console.log(JSON.stringify(error))
        }
    )
}

function getApiVersion() {
    communicationService.getWegApiVersion().then(
        (result) => {
            debugger
        },
        (error) => {
            debugger
        }
    )
}

function HomeScreen({ navigation }: DrawerScreenProps<{}>) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => login()} title="login" />
            <Button onPress={() => getApiVersion()} title="getApiVersion" />
        </View>
    );
}

function NotificationsScreen({ navigation }: DrawerScreenProps<{}>) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}