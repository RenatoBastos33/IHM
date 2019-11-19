import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import LabeledInputField from '../components/LabeledInputField';
import SendButton from '../components/SendButton';
import { useNavigation } from 'react-navigation-hooks';


const PatientRegister = () => {

    const {navigate}=useNavigation()

    return (
        <View style={styles.background}>
            <View style={styles.fieldContainer}>
                <LabeledInputField label={'Nome'}></LabeledInputField>
            </View>
            <View style={styles.fieldContainer}>
                <LabeledInputField label={'CPF'}></LabeledInputField>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.doubleFieldContainer}>
                    <LabeledInputField label={'Idade'}></LabeledInputField>
                </View>
                <View style={styles.doubleFieldContainer}>
                    <LabeledInputField label={'Sexo'}></LabeledInputField>
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                <SendButton text={'Registrar'} onPress={()=>navigate('Start')}></SendButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fieldContainer: {
        marginHorizontal: 15,
        marginBottom: 10
    },
    doubleFieldContainer: {
        marginHorizontal: 15,
        marginBottom: 10,
        flex: 1
    },
    background: {
        flex: 1,
        paddingTop: 40
    }
})

export default PatientRegister;
