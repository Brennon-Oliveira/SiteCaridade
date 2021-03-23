import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { ColorsContext } from '../contexts/ColorContext';

export default () => {

    const {changeDarkMode, black, white} = useContext(ColorsContext);

    return (
        <View style={{ paddingVertical: 10, alignItems: 'center', marginTop: Constants.statusBarHeight }}>
            <View style={{ ...styles.userImage }}></View>
            <Text style={{ ...styles.userName, color:black.toString() }}>Nome do Usuário</Text>
            <Text style={{...styles.userContribution, color:black.toString()}}>Contribuição: R$2.402,50</Text>
            <Button title='trocar' onPress={changeDarkMode}/>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#C4C4C4',
    },
    userName: {
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginVertical: 5,
    },
    userContribution: {
        fontSize: 18,
        fontFamily: 'FiraSans'
    }
})