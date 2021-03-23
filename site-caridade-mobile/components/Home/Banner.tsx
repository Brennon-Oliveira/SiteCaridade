import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useWindowDimensions } from 'react-native';
import Constants from 'expo-constants';

export default ()=>{

    const dimensions = useWindowDimensions();

    return(
        <ImageBackground source={require('./../../assets/banner.png')} style={{...styles.banner,width: dimensions.width, height: dimensions.height}}>
            <Text style={styles.logo}>Projeto Caridade</Text>
            <Text style={{...styles.mensagem,marginTop:dimensions.height/3-70}}>Uma organização focada no futuro
            das crianças e adolecentes</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    banner: {
        flex:1,
        alignItems:'center',
        flexDirection:'column'
    },
    logo: {
        color:'#0c0c0c',
        fontSize:32,
        marginTop:Constants.statusBarHeight,
        paddingHorizontal:'2%',
        fontFamily:'FiraSans'
    },
    mensagem: {
        color:'#0c0c0c',
        fontSize:22,
        paddingHorizontal:'2%',
        textAlign:'center',
        fontFamily:'FiraSans'
    }
})