import React, { useState } from 'react';

import { View, Text, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import SendButton from '../components/SendButton';
import { resultado } from '../assets/result'


// import { Container } from './styles';

const ResultScreen = () => {

    const [selected, useSelected] = useState(-1)


    const FlatListItemSeparator = () => {
        return (
            //Item Separator
            <View style={{ height: 0.5, width: '100%', backgroundColor: 'black' }} />
        );
    };

    const FlatListFooter = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 40, marginTop: 20 }}>
                <SendButton text={'Salvar'}></SendButton>
                <SendButton text={'Exportar'}></SendButton>
            </View>
        )
    }

    return (
        <View style={styles.background}>
            <FlatList
                style={{ flex: 1, paddingTop: 30 }}
                data={resultado}
                ItemSeparatorComponent={FlatListItemSeparator}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index }) => (
                    <>
                        <TouchableWithoutFeedback onPress={() => useSelected(index === selected ? -1 : index)}>
                            <View style={styles.header}>
                                <Text style={styles.textRound}>Rodada {index}</Text>
                                <Text style={styles.textDetail}>Detalhes</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        {index === selected ? (
                            <View style={styles.detailContainer}>
                                <Text><Text style={{ fontWeight: 'bold' }}>Tempo de preparo</Text>: {item.execucao} ms</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}> Tempo de execução:</Text> {item.preparo} ms</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}> Tentativas:</Text> {item.tentativas}</Text>
                                <Text><Text style={{ fontWeight: 'bold' }}> Pontos:</Text> {item.pontos}</Text>
                            </View>
                        ) : (<></>)}
                    </>
                )}
                ListFooterComponent={FlatListFooter}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        paddingHorizontal: 15,
        // paddingTop: 30,
    },
    header: {
        // backgroundColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: 10,
        paddingVertical: 10
    },
    textRound: {
        fontSize: 18
    },
    textDetail: {
        color: 'gray'
    },
    detailContainer: {
        paddingLeft: 20,
        marginBottom: 10
    }

})

export default ResultScreen;
