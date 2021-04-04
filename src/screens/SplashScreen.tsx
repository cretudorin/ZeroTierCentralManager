import { View, Text, StyleSheet } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        flex: 1
    }
});

export function SplashScreen() {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
            <Text> LOGO </Text>
        </View>
    );
}

