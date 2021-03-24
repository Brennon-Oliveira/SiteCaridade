import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { ColorsContext } from '../contexts/ColorContext';

export default () => {

    const { black, white} = useContext(ColorsContext);

    return (
        <View style={{ paddingTop: 10, alignItems: 'center', marginTop: Constants.statusBarHeight }}>
            <View style={{ ...styles.userImage,borderColor:black.toString() }}></View>
            <Text style={{ ...styles.userName, color:black.toString() }}>Nome do Usuário</Text>
            <Text style={{...styles.userContribution, color:black.toString()}}>Contribuição: R$2.402,50</Text>
            <View style={{...styles.bar,backgroundColor:black.toString()}}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: '#C4C4C4',
        borderWidth:1,
    },
    userName: {
        fontFamily: 'FiraSans',
        fontSize: 24,
        marginVertical: 5,
    },
    userContribution: {
        fontSize: 18,
        fontFamily: 'FiraSans'
    },
    bar:{
        width:'100%',
        height:2,
        marginVertical:15
    }
})