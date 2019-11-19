import React from 'react';

import { View, TouchableOpacity,Text,StyleSheet } from 'react-native';

// import { Container } from './styles';

const HomeButton = (props) =>
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
        <Text style={styles.text} >{props.text}</Text>
    </TouchableOpacity>;

const styles=StyleSheet.create({
    buttonContainer:{
        backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        width:200,
        height:50,
        borderRadius:5
    },
    text:{
        color:'white',
        fontSize:20
    }
})

export default HomeButton;
