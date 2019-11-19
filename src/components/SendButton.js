import React from 'react';

import { View, TouchableOpacity,Text,StyleSheet } from 'react-native';

// import { Container } from './styles';

const SendButton = (props) =>
    <TouchableOpacity style={styles.buttonContainer} onPress={props.onPress}>
        <Text style={styles.text} >{props.text}</Text>
    </TouchableOpacity>;

const styles=StyleSheet.create({
    buttonContainer:{
        alignSelf:'center',
        backgroundColor:'blue',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        width:120,
        height:40,
        borderRadius:5
    },
    text:{
        color:'white',
        fontSize:17
    }
})

export default SendButton;
