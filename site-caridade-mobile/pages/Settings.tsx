import React, { useContext } from 'react';
import { Button, ScrollView, View } from "react-native";
import Constants from 'expo-constants';
import { ColorsContext } from '../contexts/ColorContext';

interface props{
    navigation: {navigate:(args?: String)=>void},
}

export default ({navigation} : props)=>{

    const {changeDarkMode, white} = useContext(ColorsContext);

    return(
        <ScrollView style={{backgroundColor:white.toString()}}>
            <View style={{marginTop:Constants.statusBarHeight}}>
                <Button title='trocar' onPress={changeDarkMode}/>
            </View>
        </ScrollView>
    )
}