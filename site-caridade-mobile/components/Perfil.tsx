import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Color from '../assets/color';
import Constants from 'expo-constants';

export default ()=>{

    return(
        <View style={{paddingVertical:10,alignItems:'center',marginTop:Constants.statusBarHeight}}>
            <View style={styles.userImage}></View>
            <Text style={styles.userName}>Nome do Usuário</Text>
            <Text style={styles.userContribution}>Contribuição: R$2.402,50</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userImage:{
        width:70,
        height:70,
        borderRadius:70,
        backgroundColor: '#C4C4C4',
    },
    userName:{
        color:Color.black,
        fontFamily: 'FiraSans',
        fontSize:24,
        marginVertical:5,
    },
    userContribution: {
        color:Color.black,
        fontSize:18,
        fontFamily:'FiraSans'
    }
})