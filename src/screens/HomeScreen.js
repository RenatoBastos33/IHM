import React from 'react';

import { View, Text,StyleSheet } from 'react-native';
import HomeButton from '../components/HomeButton';
import {useNavigation} from 'react-navigation-hooks'

// import { Container } from './styles';


const Home = () =>{
    const {navigate}= useNavigation()

    return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <HomeButton text={'Iniciar teste'} onPress={()=>navigate('PatientRegister')} ></HomeButton>
            <HomeButton text={'Relatório'}></HomeButton>
            <HomeButton text={'Configurações'}></HomeButton>
        </View>
    </View>
    )}

export default Home;

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    buttonContainer:{
        justifyContent:"space-between",
        flex:0.5,
        alignItems:'stretch'
    }
})