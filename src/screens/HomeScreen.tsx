import { DrawerScreenProps } from "@react-navigation/drawer";
import { Constants } from "expo";
import React from "react";
import { Button, View } from "react-native";

export function HomeScreen({ navigation }: DrawerScreenProps<{}>) {
    return (
        <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, alignItems: "flex-start", justifyContent: "flex-start" }}>
            <Button onPress={() => console.log(1)} title="1" />
            <Button onPress={() => console.log(2)} title="2" />
        </View>
    );
}