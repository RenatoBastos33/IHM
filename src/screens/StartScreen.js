import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import HomeButton from '../components/HomeButton';
import { useNavigation } from 'react-navigation-hooks';

// import { Container } from './styles';

const StartScreen = () => {
    const { navigate } = useNavigation()

    return (
        <View style={styles.background}>
            <View style={styles.mensageContainer}>
                <View style={{ borderWidth: 1, borderColor: 'blue', marginHorizontal: 30, marginTop: 30 }}>
                    <Text style={styles.text}>Paciente João Moutella, o teste está prestes a começar. Qualquer dúvida pergunte ao médico orientador.</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <HomeButton text={'Iniciar'} onPress={() => navigate('Game')}></HomeButton>
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
    text: {
        fontSize: 16,
        marginHorizontal: 10,
        marginVertical: 5
    }


})
export default StartScreen;
