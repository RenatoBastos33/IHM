import React from 'react';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
import UnityView from 'react-native-unity-view';

const GameSreen = () => {
    return (
        <View style={styles.container}>
            <UnityView style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, }} /> : null}
        <Text style={styles.welcome}>
                Welcome to React Native!
        </Text>
        </View>
    );
}
export default GameSreen;