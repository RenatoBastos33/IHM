import React from 'react';

import { View,Text,TextInput,StyleSheet } from 'react-native';

// import { Container } from './styles';

const LabeledInputField = (props) =>
    <View>
        <Text>{props.label+': '}</Text>
        <TextInput 
        underlineColorAndroid={'#D3D3D3'}
        style={styles.field}/>
    </View>;


const styles=StyleSheet.create({
    field:{
        marginTop:0,
        paddingTop:0,
        paddingLeft:6
    }
})

export default LabeledInputField;
