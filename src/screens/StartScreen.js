import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import HomeButton from '../components/HomeButton';

// import { Container } from './styles';

const StartScreen = () => {
    return (
        <View style={styles.background}>
            <View style={styles.mensageContainer}>
                <View style={{borderWidth:1,borderColor:'blue',marginHorizontal:40,marginTop:40}}>
                    <Text style={styles.text}>Paciente joão, o teste está prestes a começar...</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <HomeButton text={'Iniciar'}></HomeButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    mensageContainer: {
        flex: 0.5
    },
    buttonContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    text:{
        fontSize:16,
        marginHorizontal:10,
        marginVertical:5
    }


})
export default StartScreen;
